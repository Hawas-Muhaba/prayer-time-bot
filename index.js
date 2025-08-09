
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
        await ctx.reply('Sorry, Icoudn\'t fetch the prayer times for teh location. Please try again.');
    }
}

//--Handler for mobile location button

bot.on('location', async(ctx)=>{
    const {latitude, longitude} = ctx.message.location;
    crossOriginIsolated.log('Recieved location via button: Lat=${latitude}, Lon=${longitude}');
    await ctx.reply('Location recieved', Markup.removeKeyboard());
    await sendPrayerTimes(ctx, latitude,longitude);
});

//--Handler for non location sharing devices like desktop, which is by text based. they tyoe the city

bot.on('text', async (ctx)=>{
    const messageText = ctx.message.text;
    {
        //hear is your work place
    }
});

bot.launch();
console.log('Bot is running....');

process.once('SIGINT', ()=> bot.stop('SIGINT'));
process.once('SIGTERM', ()=> bot.stop('SIGTERM'));