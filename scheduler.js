// The new, production-ready scheduler.js
const cron = require("node-cron");
const axios = require("axios");
const { DateTime } = require("luxon");
const db = require("./database");
const { t } = require("./locales.js");

const DEFAULT_METHOD = parseInt(process.env.ALADHAN_METHOD || "2", 10);
const NOTIFICATION_LEAD_MINUTES = 10;

// --- Helper Functions ---
async function fetchAladhanTimings(lat, lon, method) {
  const url = `https://api.aladhan.com/v1/timings?latitude=${lat}&longitude=${lon}&method=${method}`;
  const res = await axios.get(url);
  if (!res.data || !res.data.data)
    throw new Error("Aladhan: unexpected response");
  return res.data.data;
}

// --- Main Scheduler Logic ---
function startScheduler(bot) {
  console.log("Starting production scheduler...");

  // JOB 1: The Daily Fetcher. Runs once a day at 1 AM server time (UTC).
  cron.schedule("0 1 * * *", async () => {
    console.log(
      "Scheduler (Fetcher): Running daily job to fetch prayer times for all users..."
    );
    const users = await db.getAllActiveUsers();
    if (!users || users.length === 0) {
      console.log("Scheduler (Fetcher): No active users found.");
      return;
    }

    for (const user of users) {
      try {
        const aladhanData = await fetchAladhanTimings(
          user.latitude,
          user.longitude,
          user.method || DEFAULT_METHOD
        );
        // Save the timings and the timezone to the user's record in the DB
        await db.updateUserPrayerTimes(user.chat_id, {
          timings: aladhanData.timings,
          timezone: aladhanData.meta.timezone,
        });
      } catch (err) {
        console.error(
          `Scheduler (Fetcher): Failed to fetch/save times for user ${user.chat_id}:`,
          err.message
        );
      }
    }
    console.log(
      `Scheduler (Fetcher): Finished updating prayer times for ${users.length} users.`
    );
  });

  // JOB 2: The Notifier. Runs every minute, every day.
  cron.schedule("* * * * *", async () => {
    const users = await db.getAllActiveUsers();
    if (!users || users.length === 0) return; // No users, do nothing

    for (const user of users) {
      // Skip users who don't have prayer times saved yet
      if (
        !user.prayer_times ||
        !user.prayer_times.timings ||
        !user.prayer_times.timezone
      )
        continue;

      const prayers = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"];
      const userTimezone = user.prayer_times.timezone;
      const nowInUserTimezone = DateTime.now().setZone(userTimezone);

      for (const prayer of prayers) {
        const prayerTimeStr = user.prayer_times.timings[prayer]; // e.g., "12:30"
        if (!prayerTimeStr) continue;

        // Create a DateTime object for today's prayer time in the user's timezone
        const [hour, minute] = prayerTimeStr.split(":");
        const prayerTimeToday = nowInUserTimezone.set({
          hour,
          minute,
          second: 0,
          millisecond: 0,
        });

        // Calculate the exact notification time
        const notificationTime = prayerTimeToday.minus({
          minutes: NOTIFICATION_LEAD_MINUTES,
        });

        // THE CRITICAL CHECK:
        // Is the current time in the user's timezone the same hour and minute as the notification time?
        if (
          nowInUserTimezone.hour === notificationTime.hour &&
          nowInUserTimezone.minute === notificationTime.minute
        ) {
          console.log(
            `Sending ${prayer} notification to user ${user.chat_id}...`
          );
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
          } catch (err) {
            console.error(
              `Scheduler (Notifier): Failed to send message to ${user.chat_id}:`,
              err.message
            );
            // Here you could add logic to mark the user as inactive if the bot is blocked
          }
        }
      }
    }
  });
}
async function onboardNewUser(user) {
  console.log(
    `Onboarding new user ${user.chat_id} by fetching initial prayer times...`
  );
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
    console.log(`Successfully onboarded user ${user.chat_id}.`);
  } catch (err) {
    console.error(`Failed to onboard user ${user.chat_id}:`, err.message);
  }
}

module.exports = { startScheduler, onboardNewUser };
