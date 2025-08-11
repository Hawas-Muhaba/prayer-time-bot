// In scheduler.js
const cron = require('node-cron');
const axios = require('axios');
const { DateTime } = require('luxon');
const db = require('./database');

const DEFAULT_PLANNER_CRON = process.env.DAILY_PLAN_CRON || '0 1 * * *';
const DEFAULT_METHOD = parseInt(process.env.ALADHAN_METHOD || '2', 10);
const LOOK_AHEAD_HOURS = 24;

const scheduledTimeouts = new Map();

function clearAllScheduled() {
    for (const tid of scheduledTimeouts.values()) clearTimeout(tid);
    scheduledTimeouts.clear();
}

function scheduleOne(key, targetMs, sendFn) {
    const delay = targetMs - Date.now();
    if (delay <= 0) return null;
    if (scheduledTimeouts.has(key)) clearTimeout(scheduledTimeouts.get(key));

    const tid = setTimeout(() => {
        sendFn().finally(() => scheduledTimeouts.delete(key));
    }, delay);

    scheduledTimeouts.set(key, tid);
    return tid;
}

async function fetchAladhanTimings(lat, lon, method) {
    const url = `https://api.aladhan.com/v1/timings?latitude=${lat}&longitude=${lon}&method=${method}`;
    const res = await axios.get(url);
    if (!res.data || !res.data.data) throw new Error('Aladhan: unexpected response');
    return res.data.data;
}

function startScheduler(bot, options = {}) {
    const plannerCron = options.plannerCron || DEFAULT_PLANNER_CRON;
    const dryRun = !!options.dryRun;

    console.log(`Scheduler starting. plannerCron="${plannerCron}"`);

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

        if (!users || users.length === 0) {
            console.log('Scheduler: no active users found, planner finished.');
            return;
        }

        console.log(`Scheduler: Found ${users.length} active user(s). Processing...`);

        for (const user of users) {
            try {
                const aladhan = await fetchAladhanTimings(user.latitude, user.longitude, user.method || DEFAULT_METHOD);
                const timings = aladhan.timings;
                const dateStr = aladhan.date?.gregorian?.date;
                const timezone = aladhan.meta?.timezone || 'UTC';
                const prayers = ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];

                for (const prayer of prayers) {
                    const hhmm = timings?.[prayer]?.toString().match(/(\d{1,2}:\d{2})/)?.[1];
                    if (!hhmm) continue;

                    const dt = DateTime.fromFormat(`${dateStr} ${hhmm}`, 'dd-MM-yyyy HH:mm', { zone: timezone });
                    if (!dt.isValid) continue;

                    const NOTIFICATION_LEAD_MINUTES = 10;
                    const notificationTimeMs = dt.toMillis() - (NOTIFICATION_LEAD_MINUTES * 60 * 1000);
                    const diffHours = (notificationTimeMs - Date.now()) / (1000 * 60 * 60);
                    if (diffHours <= 0 || diffHours > LOOK_AHEAD_HOURS) continue;

                    const key = `${user.chat_id}:${dateStr}:${prayer}`;
                    const sendFn = () => bot.telegram.sendMessage(user.chat_id, `Reminder: ${prayer} prayer is in ${NOTIFICATION_LEAD_MINUTES} minutes. 🙏`);
                    
                    scheduleOne(key, notificationTimeMs, sendFn);
                    const notifyTime = new Date(notificationTimeMs).toLocaleTimeString('en-US', { timeZone: timezone });
                    console.log(`  -> Scheduled ${prayer} for ${user.chat_id} at ${notifyTime}`);
                }
            } catch (err) {
                console.error(`Scheduler: failed to process user ${user.chat_id}:`, err.message || err);
            }
        }
        console.log('Scheduler: daily planner finished at', new Date().toISOString());
    }

    dailyPlanner().catch((e) => console.error('Scheduler initial run failed:', e));
    const task = cron.schedule(plannerCron, () => dailyPlanner().catch((e) => console.error('Scheduler dailyPlanner failed:', e)));
    return { stop: () => { task.stop(); clearAllScheduled(); } };
}

module.exports = { startScheduler };