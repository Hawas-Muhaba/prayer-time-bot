// DEBUGGING: The script is starting now.
console.log("DEBUGGING: The script file has started execution.");

// At the top with the other require statements
require("dotenv").config();
const { Telegraf, Markup } = require("telegraf"); // We now need 'Markup'

//import our custom function from api.js
const { getPrayerTimes } = require("./api.js");

if (!process.env.BOT_TOKEN) {
  console.error("ERROR: BOT_TOKEN is not set in the .env file!");
  process.exit(1);
}

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {
  const userName = ctx.from.first_name || "friend";
  ctx.reply(
    `Assalamu alaikum, ${userName}!\n\nWelcome to the Prayer Time Bot.`
  );
  ctx.reply(
    "To get started, please share your location with me.",
    Markup.keyboard([
      Markup.button.locationRequest("📍 Share My Location"),
    ]).resize()
  );
});

bot.help((ctx) => {
  ctx.reply(
    "Here's how to use me:\n\n" +
      "/start - Greet the bot and show the location button.\n" +
      "Share your location - Send your current location to get today's prayer times.\n\n" +
      "More features like daily notifications are coming soon!"
  );
});

bot.on("location", async (ctx) => {
  const { latitude, longitude } = ctx.message.location;
  console.log(`Received location: Lat=${latitude}, Lon=${longitude}`);
  await ctx.reply("Thank you! Fetching prayer times for your location...");
  const prayerTimes = await getPrayerTimes(latitude, longitude);

  if (prayerTimes) {
    const responseMessage =
      `Prayer Times for Today:\n\n` +
      `Fajr: ${prayerTimes.Fajr}\n` +
      `Dhuhr: ${prayerTimes.Dhuhr}\n` +
      `Asr: ${prayerTimes.Asr}\n` +
      `Maghrib: ${prayerTimes.Maghrib}\n` +
      `Isha: ${prayerTimes.Isha}`;
    await ctx.reply(responseMessage);
    await ctx.reply(
      "You can ask for my help again anytime.",
      Markup.removeKeyboard()
    );
  } else {
    await ctx.reply(
      "Sorry, I couldn't fetch the prayer times. Please try again later."
    );
  }
});

bot.on("text", (ctx) => {
  ctx.reply(
    'I see! To get prayer times, please use the "📍 Share My Location" button. If you don\'t see it, type /start.'
  );
});

// DEBUGGING: We are about to launch the bot. If you don't see this, the error is above.
console.log("DEBUGGING: Code has passed all handlers, about to launch bot.");

// Start the bot
bot.launch();
console.log("Bot is up and running...");

// Graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
