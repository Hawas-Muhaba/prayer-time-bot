
const http = require("http");
require("dotenv").config();
const { Telegraf, Markup } = require("telegraf");

// Import all our modules
const {
  initializeDatabase,
  saveUserLocation,
  setUserLanguage,
  getUser,
  getAllActiveUsers,
  setUserActive,
  deleteUser,
  getTotalUserCount
} = require("./database.js");
const { getPrayerTimes } = require("./api.js");
const { geocodeCity } = require("./geocode.js");
const { startScheduler, onboardNewUser } = require("./scheduler.js");
const { t, locales } = require("./locales.js"); // Import both

async function main() {
  await initializeDatabase();
  console.log("Database is confirmed ready. Starting bot...");
  const bot = new Telegraf(process.env.BOT_TOKEN);

  // --- LANGUAGE SELECTION KEYBOARD (no changes) ---
  const languageKeyboard = Markup.inlineKeyboard([
    [
      Markup.button.callback("🇬🇧 English", "set_lang_en"),
      Markup.button.callback("🇸🇦 العربية", "set_lang_ar"),
    ],
    [
      Markup.button.callback("🇪🇹 አማርኛ", "set_lang_am"),
      Markup.button.callback("🇪🇹 Oromiffa", "set_lang_om"),
    ],
    [
      Markup.button.callback("🇪🇹 ትግርኛ", "set_lang_ti"),
      Markup.button.callback("🇪🇹 Afar", "set_lang_aa"),
    ],
    [
      Markup.button.callback("🇸🇴 Soomaali", "set_lang_so"),
      Markup.button.callback("🇹🇷 Türkçe", "set_lang_tr"),
    ],
    [
      Markup.button.callback("🇵🇰 اردو", "set_lang_ur"),
      Markup.button.callback("🇮🇳 हिन्दी", "set_lang_hi"),
    ],
    [
      Markup.button.callback("🇷🇺 Русский", "set_lang_ru"),
      Markup.button.callback("🇮🇩 Bahasa Indonesia", "set_lang_id"),
    ],
    [
      Markup.button.callback("🇺🇿 O'zbekcha", "set_lang_uz"),
      Markup.button.callback("🇧🇷 Português (BR)", "set_lang_pt"),
    ],
    [
      Markup.button.callback("🇮🇷 فارسی", "set_lang_fa"),
      Markup.button.callback("🇲🇾 Bahasa Melayu", "set_lang_ms"),
    ],
    [
      Markup.button.callback("🇺🇦 Українська", "set_lang_uk"),
      Markup.button.callback("🇮🇹 Italiano", "set_lang_it"),
    ],
  ]);

  // --- FULLY TRANSLATED HELPER FUNCTION ---
  async function sendPrayerTimes(ctx, latitude, longitude) {
    const user = await getUser(ctx.from.id);
    const lang = user?.language_code || "en";

    await ctx.reply(t(lang, "FETCHING_PRAYER_TIMES"));

    const prayerTimes = await getPrayerTimes(latitude, longitude);
    if (prayerTimes) {
      const prayerNames = t(lang, "PRAYERS");

      const responseMessage =
        `*${t(lang, "PRAYER_TIMES_TODAY")}*\n\n` +
        `${prayerNames.Fajr}: ${prayerTimes.Fajr}\n` +
        `${prayerNames.Dhuhr}: ${prayerTimes.Dhuhr}\n` +
        `${prayerNames.Asr}: ${prayerTimes.Asr}\n` +
        `${prayerNames.Maghrib}: ${prayerTimes.Maghrib}\n` +
        `${prayerNames.Isha}: ${prayerTimes.Isha}`;
      await ctx.reply(responseMessage, { parse_mode: "Markdown" });
    } else {
      await ctx.reply(t(lang, "PRAYER_TIMES_FETCH_ERROR"));
    }
  }

  // --- COMMAND AND TEXT HANDLING ---

  bot.start(async (ctx) => {
    const user = await getUser(ctx.from.id);
    const welcomeText = t(user?.language_code, "WELCOME");
    await ctx.reply(welcomeText, languageKeyboard);
  });

  const languageCodes = [
    "en",
    "am",
    "om",
    "ti",
    "ar",
    "aa",
    "so",
    "tr",
    "ur",
    "hi",
    "ru",
    "id",
    "uz",
    "pt",
    "fa",
    "ms",
    "uk",
    "it"
  ];
  for (const code of languageCodes) {
    bot.action(`set_lang_${code}`, async (ctx) => {
      await setUserLanguage(ctx.from.id, code);
      const langUpdatedText = t(code, "LANG_UPDATED");
      const shareLocationText = t(code, "SHARE_LOCATION_PROMPT");
      await ctx.editMessageText(langUpdatedText);
      await ctx.reply(
        shareLocationText,
        Markup.keyboard([
          [Markup.button.locationRequest(t(code, "SHARE_LOCATION_BTN"))],
        ]).resize()
      );
    });
  }

//   const getMainMenu = (lang) =>
//     Markup.keyboard([
//       [t(lang, "MENU_SETTINGS"), t(lang, "MENU_DONATE")],
//       [t(lang, "MENU_HELP")],
//     ]).resize();
const getMainMenu = (lang) => {
  // 1. Get the translated button texts
  const settingsText = t(lang, "MENU_SETTINGS");
  const donateText = t(lang, "MENU_DONATE");
  const feedback = t(lang, "MENU_FEEDBACK");
  const helpText = t(lang, "MENU_HELP");

  // 2. **Defensive Check:** Log the values to see what we're getting.
  console.log("Building main menu with texts:", {
    settingsText,
    donateText,
    feedback,
    helpText,
  });

  // 3. Ensure none of the texts are undefined or invalid before creating the keyboard.
  if (!settingsText || !donateText || !helpText) {
    console.error(
      "CRITICAL: A menu button text is undefined. Check your locales.js file and keys."
    );
    // Provide a safe fallback menu in English to prevent a crash.
    return Markup.keyboard([
      ["⚙️ Settings", "❤️ Donate"],
      ["❓ Help", "Feedback"],
    ]).resize();
  }

  // 4. If all texts are valid, create the real menu.
  return Markup.keyboard([[settingsText, donateText], [helpText], [feedback]]).resize();
};

  const allCmdTexts = (key) =>
    Object.values(locales)
      .map((lang) => lang[key])
      .filter(Boolean);

  bot.hears([...allCmdTexts("MENU_SETTINGS"), "/settings"], async (ctx) => {
    const user = await getUser(ctx.from.id);
    const lang = user?.language_code || "en";
    await ctx.reply(
      t(lang, "SETTINGS_HEADER"),
      Markup.inlineKeyboard([
        [
          Markup.button.callback(
            t(lang, "SETTINGS_BTN_PAUSE_LABEL"),
            "pause_notifications"
          ),
        ],
        [
          Markup.button.callback(
            t(lang, "SETTINGS_BTN_RESUME_LABEL"),
            "resume_notifications"
          ),
        ],
        [
          Markup.button.callback(
            t(lang, "SETTINGS_BTN_DELETE_LABEL"),
            "delete_my_data"
          ),
        ],
        // [Markup.button.callback(t(lang, "SETTINGS_BTN_BACK"), "back_to_main")],
      ])
    );
  });

  bot.hears([...allCmdTexts("MENU_DONATE"), "/donate"], async (ctx) => {
    const user = await getUser(ctx.from.id);
    await ctx.reply(t(user?.language_code, "DONATE_MSG"), {
      parse_mode: "Markdown",
    });
  });

  bot.hears([...allCmdTexts("MENU_HELP"), "/help"], async (ctx) => {
    const user = await getUser(ctx.from.id);
    await ctx.reply(t(user?.language_code, "HELP_MSG"));
  });
  bot.action("back_to_main", async (ctx) => {
    const user = await getUser(ctx.from.id);
    const lang = user?.language_code || "en";

    // Acknowledge the button press
    await ctx.answerCbQuery();
    // Delete the settings message with the inline buttons
    await ctx.deleteMessage();
    // Send a fresh message showing the main menu
    await ctx.reply(t(lang, "MAIN_MENU_PROMPT"), getMainMenu(lang));
  });
//   bot.hears([...allCmdTexts("MENU_FEEDBACK"), "/feedback"], async (ctx) => {
//     // For now, just a placeholder response.
//     // We will add the real feedback logic later.
//     await ctx.reply(
//       "Thank you for your interest! The feedback feature is coming soon."
//     );
//   });
bot.command("stats", async (ctx) => {
  // 1. Get the admin ID from the environment variables
  const adminId = process.env.ADMIN_USER_ID;

  // 2. Security Check: Is the person sending this command the admin?
  // We compare their ID to the one in our .env file.
  if (!adminId || ctx.from.id.toString() !== adminId) {
    console.log(`Unauthorized /stats attempt by user: ${ctx.from.id}`);
    // Don't even reply, just ignore the command for non-admins.
    return;
  }

  try {
    // 3. If they are the admin, get the user count.
    const totalUsers = await getTotalUserCount();
    const activeUsers = (await getAllActiveUsers()).length; // We can reuse this function

    // 4. Create a nice status message.
    const statsMessage =
      `📊 **Bot Statistics** 📊\n\n` +
      `- **Total Users:** ${totalUsers}\n` +
      `- **Active Users (Notifications On):** ${activeUsers}`;

    // 5. Reply to the admin with the stats.
    await ctx.reply(statsMessage, { parse_mode: "Markdown" });

    // Also, log it to the server console for your records.
    console.log(
      `Admin stats requested. Total users: ${totalUsers}, Active users: ${activeUsers}`
    );
  } catch (error) {
    console.error("Error fetching stats:", error);
    await ctx.reply("Sorry, there was an error fetching the stats.");
  }
});
 bot.hears([...allCmdTexts("MENU_FEEDBACK"), "/feedback"], async (ctx) => {
   const user = await getUser(ctx.from.id);
   const lang = user?.language_code || "en";
   const feedbackBotUsername = "PrayerFeedbackBot"; // Use your actual feedback bot username

   await ctx.reply(
     t(lang, "FEEDBACK_PROMPT"),
     Markup.inlineKeyboard([
       [
         Markup.button.url(
           t(lang, "FEEDBACK_BTN_LABEL"),
           `https://t.me/${feedbackBotUsername}`
         ),
       ],
     ])
   );
 });
  bot.on("location", async (ctx) => {
    const user = await getUser(ctx.from.id);
    const lang = user?.language_code || "en";
    const { latitude, longitude } = ctx.message.location;
    const { id: chat_id, first_name } = ctx.from;
    await saveUserLocation(
      chat_id, first_name,
      latitude,
      longitude
    );
    await onboardNewUser({ chat_id, latitude, longitude });
    await ctx.reply(t(lang, "LOCATION_SAVED"), getMainMenu(lang));
    await sendPrayerTimes(ctx, latitude, longitude);
  });

 

  bot.hears(/^(?!\/).+/, async (ctx) => {
    const user = await getUser(ctx.from.id);
    const lang = user?.language_code || "en";
    const locations = await geocodeCity(ctx.message.text);
    if (locations && locations.length > 0) {
      const firstResult = locations[0];
      const { id: chat_id, first_name } = ctx.from;
      await saveUserLocation(
        chat_id,
        first_name,
        firstResult.lat,
        firstResult.lon
      );
      await onboardNewUser({
        chat_id,
        latitude: firstResult.lat,
        longitude: firstResult.lon,
      });
      await ctx.reply(
        t(lang, "LOCATION_SET_TO", firstResult.name),
        getMainMenu(lang)
      );
      await sendPrayerTimes(ctx, firstResult.lat, firstResult.lon);
    } else {
      await ctx.reply(t(lang, "CITY_NOT_FOUND"));
    }
  });

  bot.action("pause_notifications", async (ctx) => {
    const user = await getUser(ctx.from.id);
    const lang = user?.language_code || "en";
    await setUserActive(ctx.chat.id, false);
    await ctx.answerCbQuery(t(lang, "NOTIFY_PAUSED_CONFIRM"));
    await ctx.editMessageText(t(lang, "NOTIFICATIONS_PAUSED"));
  });

  bot.action("resume_notifications", async (ctx) => {
    const user = await getUser(ctx.from.id);
    const lang = user?.language_code || "en";
    await setUserActive(ctx.chat.id, true);
    await ctx.answerCbQuery(t(lang, "NOTIFY_RESUMED_CONFIRM"));
    await ctx.editMessageText(t(lang, "NOTIFICATIONS_RESUMED"));
  });

  bot.action("delete_my_data", async (ctx) => {
    const user = await getUser(ctx.from.id); // Get lang BEFORE deleting
    const lang = user?.language_code || "en";
    await deleteUser(ctx.chat.id);
    await ctx.answerCbQuery(t(lang, "DATA_DELETED_CONFIRM"));
    //Delete the "Settings" message so the user has a clean slate.
    await ctx.deleteMessage();
    //Proactively restart the onboarding flow for the user
    const welcomeText = t("en", "WELCOME"); // Always start in English to offer choices
    await ctx.reply(welcomeText, languageKeyboard);
  });
  

  bot.launch();
  console.log("Bot is running with full multi-language support...");
  startScheduler(bot);
}

const PORT = process.env.PORT || 3000;
http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.end('Bot is alive and running:\n');
}).listen(PORT,()=>{
    console.log(`Health check server running on port ${PORT}`);
})

main().catch((err) => {
  console.error("FATAL: Bot failed to start.", err);
});
