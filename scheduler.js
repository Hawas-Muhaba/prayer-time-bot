const cron = require("node-cron");
const axios = require("axios");
const { DateTime } = require("luxon");
const db = require("./database");
const { t } = require("./locales.js");

const DEFAULT_METHOD = parseInt(process.env.ALADHAN_METHOD || "2", 10);
const NOTIFICATION_LEAD_MINUTES = 10;

// Helper Functions
async function fetchAladhanTimings(lat, lon, method) {
  const url = `https://api.aladhan.com/v1/timings?latitude=${lat}&longitude=${lon}&method=${method}`;
  const res = await axios.get(url);
  if (!res.data || !res.data.data)
    throw new Error("Aladhan: unexpected response");
  return res.data.data;
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Main Scheduler Logic
function startScheduler(bot) {
  console.log("Starting production scheduler...");

  // JOB 1: The Daily Fetcher
  cron.schedule("0 1 * * *", async () => {
    console.log("Scheduler (Fetcher): Running daily job...");
    const users = await db.getAllActiveUsers();
    if (!users || users.length === 0)
      return console.log("Scheduler (Fetcher): No active users found.");

    for (const user of users) {
      try {
        const aladhanData = await fetchAladhanTimings(
          user.latitude,
          user.longitude,
          user.method || DEFAULT_METHOD
        );
        await db.updateUserPrayerTimes(user.chat_id, {
          timings: aladhanData.timings,
          timezone: aladhanData.meta.timezone,
        });
      } catch (err) {
        console.error(
          `Scheduler (Fetcher): Failed for user ${user.chat_id}:`,
          err.message
        );
      }
    }
    console.log(
      `Scheduler (Fetcher): Finished updating for ${users.length} users.`
    );
  });

  // JOB 2: The Notifier
  cron.schedule("* * * * *", async () => {
    const users = await db.getAllActiveUsers();
    if (!users || users.length === 0) return;

    const notificationsToSend = [];
    const now = DateTime.now();

    for (const user of users) {
      if (!user.prayer_times?.timings || !user.prayer_times?.timezone) continue;

      const userTimezone = user.prayer_times.timezone;
      const nowInUserTimezone = now.setZone(userTimezone);
      const prayers = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"];

      for (const prayer of prayers) {
        const prayerTimeStr = user.prayer_times.timings[prayer];
        if (!prayerTimeStr) continue;

        const [hour, minute] = prayerTimeStr.split(":");
        const prayerTimeToday = nowInUserTimezone.set({
          hour,
          minute,
          second: 0,
          millisecond: 0,
        });
        const notificationTime = prayerTimeToday.minus({
          minutes: NOTIFICATION_LEAD_MINUTES,
        });

        if (
          nowInUserTimezone.hour === notificationTime.hour &&
          nowInUserTimezone.minute === notificationTime.minute
        ) {
          notificationsToSend.push({
            user,
            prayer,
            prayerTimeStr,
            userTimezone,
          });
        }
      }
    }

    if (notificationsToSend.length > 0) {
      console.log(
        `Found ${notificationsToSend.length} notifications to send this minute.`
      );
      for (const notification of notificationsToSend) {
        const { user, prayer, prayerTimeStr, userTimezone } = notification;
        try {
          const lang = user.language_code || "en";
          const translatedPrayerName = t(lang, "PRAYERS")[prayer];
          const text = t(
            lang,
            "NOTIFICATION_REMINDER",
            translatedPrayerName,
            NOTIFICATION_LEAD_MINUTES,
            prayerTimeStr,
            userTimezone
          );
          await bot.telegram.sendMessage(user.chat_id, text);
          console.log(
            `  -> Sent ${prayer} notification to user ${user.chat_id}`
          );
        } catch (err) {
          if (err.response && err.response.error_code === 403) {
            console.log(
              `User ${user.chat_id} blocked the bot. Pausing notifications.`
            );
            await db.setUserActive(user.chat_id, false);
          } else {
            console.error(
              `Scheduler (Notifier): Failed to send to ${user.chat_id}:`,
              err.message
            );
          }
        }
        await sleep(200); // Stagger sending
      }
    }
  });
}

async function onboardNewUser(user) {
  console.log(`Onboarding new user ${user.chat_id}...`);
  try {
    const aladhanData = await fetchAladhanTimings(
      user.latitude,
      user.longitude,
      DEFAULT_METHOD
    );
    await db.updateUserPrayerTimes(user.chat_id, {
      timings: aladhanData.timings,
      timezone: aladhanData.meta.timezone,
    });
    console.log(`Successfully onboarded user ${user.chat_id}.`);
  } catch (err) {
    console.error(`Failed to onboard user ${user.chat_id}:`, err.message);
  }
}

module.exports = { startScheduler, onboardNewUser };
