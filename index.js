// At the top with the other require statements
require("dotenv").config();
const { Telegraf, Markup } = require("telegraf"); // We now need 'Markup'

//import our custom function from api.js
const { getPrayerTimes } = require("./api.js");

// Import the geocodeCity function
const { geocodeCity } = require("./geocode.js");


if (!process.env.BOT_TOKEN) {
  console.error("ERROR: BOT_TOKEN is not set in the .env file!");
  process.exit(1);
}

const bot = new Telegraf(process.env.BOT_TOKEN);
const startMessage =
  `Assalamu alaikum! I can provide prayer times for your location.\n\n` +
  `📱 **On Mobile:** Use the "Share My Location" button for pinpoint accuracy.\n\n` +
  `💻 **On Desktop:** Simply type and send the name of your city (e.g., "Cairo").`;
bot.start((ctx) => {
  const userName = ctx.from.first_name || "friend";
  ctx.reply(
    startMessage,
    Markup.keyboard([
      Markup.button.locationRequest("📍 Share My Location"),
    ]).resize()
  );
});

bot.help((ctx) => {
  ctx.reply(
    startMessage
  );
});


async function sendPrayerTimes(ctx, latitude, longitude){
    await ctx.reply('Thank you! Fetching prayer times...');

    const prayerTimes = await getPrayerTimes(latitude, longitude);

    if(prayerTimes){
        const responseMessage =
          `Prayer Times for Today:\n\n` +
          `Fajr: ${prayerTimes.Fajr}\n` +
          `Dhuhr: ${prayerTimes.Dhuhr}\n` +
          `Asr: ${prayerTimes.Asr}\n` +
          `Maghrib: ${prayerTimes.Maghrib}\n` +
          `Isha: ${prayerTimes.Isha}`;

          await ctx.reply(responseMessage);
    }else{
        await ctx.reply('Sorry, I couldn\'t fetch the prayer times for the location. Please try again.');
    }
}

//--Handler for mobile location button

bot.on('location', async(ctx)=>{
    const {latitude, longitude} = ctx.message.location;
    crossOriginIsolated.log('Recieved location via button: Lat=${latitude}, Lon=${longitude}');
    await ctx.reply('Location recieved', Markup.removeKeyboard());
    await sendPrayerTimes(ctx, latitude,longitude);
});

//--Handler for non location sharing devices like desktop, which is by text based. they type the city

bot.on('text', async (ctx) => {
    const cityName = ctx.message.text.trim();

    // Get possible matches from OpenWeather's Geocoding API
    const matches = await geocodeCity(cityName);

    if (matches.length === 0) {
        return ctx.reply(`❌ Sorry, I couldn't find "${cityName}". Please check the spelling and try again.`);
    }

    if (matches.length === 1) {
        // Only one match found — fetch prayer times directly
        const { lat, lon, name, country } = matches[0];
        await ctx.reply(`📍 Found: ${name}, ${country}`);
        return sendPrayerTimes(ctx, lat, lon);
    }

    // More than one match — list them for the user
    let replyText = `I found multiple matches for "${cityName}":\n`;
    matches.forEach((place, i) => {
        replyText += `${i + 1}. ${place.name}, ${place.state ? place.state + ', ' : ''}${place.country}\n`;
    });
    replyText += `\nPlease reply with the number of your city.`;

    // Store matches temporarily for this user
    if (!global.cityChoices) global.cityChoices = new Map();
    global.cityChoices.set(ctx.from.id, matches);

    await ctx.reply(replyText);
});

// Optional handler to catch numeric replies for city choice
bot.on('text', async (ctx) => {
    const choice = parseInt(ctx.message.text.trim(), 10);
    if (!global.cityChoices || !global.cityChoices.has(ctx.from.id)) return;

    const matches = global.cityChoices.get(ctx.from.id);
    if (isNaN(choice) || choice < 1 || choice > matches.length) {
        return ctx.reply(`❌ Invalid choice. Please reply with a number between 1 and ${matches.length}.`);
    }

    const { lat, lon, name, country } = matches[choice - 1];
    await ctx.reply(`📍 Selected: ${name}, ${country}`);

    // Remove stored choices after selection
    global.cityChoices.delete(ctx.from.id);

    return sendPrayerTimes(ctx, lat, lon);
});

bot.launch();
console.log('Bot is running...');

process.once('SIGINT', ()=> bot.stop('SIGINT'));
process.once('SIGTERM', ()=> bot.stop('SIGTERM'));