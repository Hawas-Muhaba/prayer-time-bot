require("dotenv").config();
const { Telegraf, Markup } = require("telegraf");

const { getPrayerTimes } = require("./api.js");
const { geocodeCity } = require("./geocode.js");
// --- NEW: IMPORT DATABASE FUNCTIONS ---
const { setupDatabase, saveUserLocation } = require("./database.js");

// --- NEW: RUN DATABASE SETUP ON START ---
// We wrap the bot launch in an async function to await the DB setup.
async function startBot() {
  await setupDatabase(); // This creates the .db file and table if they don't exist.

  const bot = new Telegraf(process.env.BOT_TOKEN);

  // ... all bot handlers will go here ...

  const startMessage =
    `Assalamu alaikum! I can provide prayer times for your location.\n\n` +
    `Send your location to get today's prayer times and to **save your location for daily notifications**.\n\n` +
    `📱 **On Mobile:** Use the "Share My Location" button.\n` +
    `💻 **On Desktop:** Simply type the name of your city.`;

  bot.start((ctx) => {
    ctx.reply(
      startMessage,
      Markup.keyboard([
        Markup.button.locationRequest("📍 Share My Location"),
      ]).resize()
    );
  });

  bot.help((ctx) => {
    ctx.reply(startMessage);
  });

  // This helper function remains the same
  async function sendPrayerTimes(ctx, latitude, longitude) {
    // ... (code for this function is unchanged)
  }

  // --- MODIFIED LOCATION HANDLER ---
  bot.on("location", async (ctx) => {
    const { latitude, longitude } = ctx.message.location;
    const chat_id = ctx.chat.id;
    const first_name = ctx.from.first_name;

    console.log(`Saving location for user ${first_name} (ID: ${chat_id})`);
    // Save to DB
    await saveUserLocation(chat_id, first_name, latitude, longitude);

    await ctx.reply(
      "✅ Your location has been saved for daily notifications!",
      Markup.removeKeyboard()
    );
    // You can optionally still send today's times
    // await sendPrayerTimes(ctx, latitude, longitude);
  });

  // --- MODIFIED TEXT HANDLER ---
  bot.on("text", async (ctx) => {
    const messageText = ctx.message.text;
    if (messageText.startsWith("/")) return;

    console.log(
      `Geocoding city for user ${ctx.from.first_name}: "${messageText}"`
    );
    const locations = await geocodeCity(messageText);

    if (locations && locations.length > 0) {
      const firstResult = locations[0];
      const chat_id = ctx.chat.id;
      const first_name = ctx.from.first_name;

      // Save to DB
      await saveUserLocation(
        chat_id,
        first_name,
        firstResult.lat,
        firstResult.lon
      );

      await ctx.reply(
        `✅ Location set to "${firstResult.name}, ${firstResult.country}" for daily notifications.`
      );
      // You can optionally still send today's times
      // await sendPrayerTimes(ctx, firstResult.lat, firstResult.lon);
    } else {
      await ctx.reply(`Sorry, I could not find the city "${messageText}".`);
    }
  });

  bot.launch();
  console.log("Bot is running with Database support...");

  process.once("SIGINT", () => bot.stop("SIGINT"));
  process.once("SIGTERM", () => bot.stop("SIGTERM"));
}

// Call the main function to start the bot
startBot().catch((err) => console.error("Failed to start bot:", err));

