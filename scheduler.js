// scheduler.js
require('dotenv').config();
const cron = require('node-cron');
const axios = require('axios');
const { DateTime } = require('luxon');
const db = require('./database'); // uses getAllActiveUsers()

// default config
const DEFAULT_PLANNER_CRON = process.env.DAILY_PLAN_CRON || '0 0 * * *'; // every day at 00:00 server time
const DEFAULT_METHOD = parseInt(process.env.ALADHAN_METHOD || '2', 10);
const LOOK_AHEAD_HOURS = parseInt(process.env.LOOK_AHEAD_HOURS || '24', 10);

// In-memory store of scheduled timeouts (key -> timeoutId)
const scheduledTimeouts = new Map();

function clearAllScheduled() {
  for (const tid of scheduledTimeouts.values()) {
    clearTimeout(tid);
  }
  scheduledTimeouts.clear();
}

function scheduleOne(key, targetMs, sendFn) {
  const now = Date.now();
  const delay = targetMs - now;
  if (delay <= 0) {
    return null;
  }

  if (scheduledTimeouts.has(key)) {
    clearTimeout(scheduledTimeouts.get(key));
    scheduledTimeouts.delete(key);
  }

  const tid = setTimeout(async () => {
    try {
      await sendFn();
    } catch (err) {
      console.error('Notifier sendFn error:', err);
    } finally {
      scheduledTimeouts.delete(key);
    }
  }, delay);

  scheduledTimeouts.set(key, tid);
  return tid;
}

async function fetchAladhanTimings(lat, lon, method = DEFAULT_METHOD) {
  const url = `https://api.aladhan.com/v1/timings?latitude=${lat}&longitude=${lon}&method=${method}`;
  const res = await axios.get(url);
  if (!res.data || !res.data.data) {
    throw new Error('Aladhan: unexpected response');
  }
  return res.data.data;
}

function startScheduler(bot, options = {}) {
  const plannerCron = options.plannerCron || DEFAULT_PLANNER_CRON;
  const lookAheadHours = options.lookAheadHours || LOOK_AHEAD_HOURS;
  const dryRun = !!options.dryRun;

  if (!dryRun && (!bot || !bot.telegram)) {
    throw new Error('startScheduler requires a bot instance unless dryRun=true');
  }

  console.log(`Scheduler starting. plannerCron="${plannerCron}", lookAheadHours=${lookAheadHours}, dryRun=${dryRun}`);

  async function dailyPlanner() {
    console.log('Scheduler: running daily planner at', new Date().toISOString());

    clearAllScheduled();

    let users;
    try {
      users = await db.getAllActiveUsers();
    } catch (err) {
      console.error('Scheduler: failed to fetch users from DB:', err);
      return;
    }

    if (!Array.isArray(users) || users.length === 0) {
      console.log('Scheduler: no active users found');
      return;
    }

    for (const user of users) {
      const chatId = user.chat_id;
      const lat = user.latitude;
      const lon = user.longitude;
      const method = user.method || DEFAULT_METHOD;

      if (!chatId || lat == null || lon == null) {
        console.warn('Scheduler: skipping user with missing data', user);
        continue;
      }

      try {
        const aladhan = await fetchAladhanTimings(lat, lon, method);
        const timings = aladhan.timings;
        const dateStr = aladhan.date?.gregorian?.date; // usually "DD-MM-YYYY"
        const timezone = aladhan.meta?.timezone || user.timezone || 'UTC';

        const prayers = ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];

        for (const prayer of prayers) {
          const timeRaw = timings?.[prayer];
          if (!timeRaw) continue;

          const m = timeRaw.toString().match(/(\d{1,2}:\d{2})/);
          if (!m) continue;
          const hhmm = m[1];

          // Parse with correct format for DD-MM-YYYY
          const dt = DateTime.fromFormat(`${dateStr} ${hhmm}`, 'dd-MM-yyyy HH:mm', { zone: timezone });
          if (!dt.isValid) {
            console.warn('Scheduler: invalid DateTime for', { chatId, dateStr, hhmm, timezone, prayer });
            continue;
          }

          const targetMs = dt.toMillis();
          const diffHours = (targetMs - Date.now()) / (1000 * 60 * 60);
          if (diffHours <= 0 || diffHours > lookAheadHours) {
            continue;
          }

          const key = `${chatId}:${dateStr}:${prayer}`;

          const sendFn = async () => {
            const text = `🕌 Prayer reminder — ${prayer}\nTime: ${hhmm} (${timezone})\nMay your prayer be accepted.`;
            if (dryRun) {
              console.log(`[dryRun] would send to ${chatId}:`, text);
              return;
            }
            try {
              await bot.telegram.sendMessage(chatId, text);
              console.log(`Scheduler: sent ${prayer} to ${chatId} at ${new Date().toISOString()}`);
            } catch (err) {
              console.error(`Scheduler: failed to send ${prayer} to ${chatId}:`, err?.response?.data || err.message);
            }
          };

          scheduleOne(key, targetMs, sendFn);
        }
      } catch (err) {
        console.error('Scheduler: failed to schedule for user', user.chat_id, err.message || err);
      }
    }

    console.log('Scheduler: daily planner finished at', new Date().toISOString());
  }

  dailyPlanner().catch((e) => console.error('Scheduler initial run failed:', e));

  const task = cron.schedule(plannerCron, () => {
    dailyPlanner().catch((e) => console.error('Scheduler dailyPlanner failed:', e));
  });

  return {
    stop: () => {
      task.stop();
      clearAllScheduled();
      console.log('Scheduler stopped');
    },
  };
}

module.exports = { startScheduler };
