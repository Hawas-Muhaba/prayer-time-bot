// In index.js
require('dotenv').config();
const { Telegraf, Markup } = require('telegraf');

const { initializeDatabase, saveUserLocation } = require('./database.js');
const { geocodeCity } = require('./geocode.js');
const { startScheduler } = require('./scheduler.js');

const { getPrayerTimes } = require('./api.js');

async function main() {
    await initializeDatabase();
    console.log("Database is confirmed ready. Starting bot...");

    const bot = new Telegraf(process.env.BOT_TOKEN);

    async function sendPrayerTimes(ctx, latitude, longitude) {
        await ctx.reply('Fetching today\'s prayer times for you...');

        const prayerTimes = await getPrayerTimes(latitude, longitude);

        if (prayerTimes) {
            const responseMessage =
                `Today's Prayer Times:\n\n` +
                `Fajr: ${prayerTimes.Fajr}\n` +
                `Dhuhr: ${prayerTimes.Dhuhr}\n` +
                `Asr: ${prayerTimes.Asr}\n` +
                `Maghrib: ${prayerTimes.Maghrib}\n` +
                `Isha: ${prayerTimes.Isha}`;

            await ctx.reply(responseMessage);
        } else {
            await ctx.reply('Sorry, I couldn\'t fetch the prayer times for that location right now.');
        }
    }

    const startMessage = `Assalamu alaikum! I can provide prayer times for your location.\n\n` +
        `📱 **On Mobile:** Use the "Share My Location" button.\n` +
        `💻 **On Desktop:** Simply type and send the name of your city.`;

    bot.start((ctx) => {
        ctx.reply(startMessage, Markup.keyboard([
            Markup.button.locationRequest('📍 Share My Location'),
        ]).resize());
    });

    bot.on('location', async (ctx) => {
        const { latitude, longitude } = ctx.message.location;
        const { id: chat_id, first_name } = ctx.from;
        await saveUserLocation(chat_id, first_name, latitude, longitude);
        await ctx.reply("✅ Your location has been saved for daily notifications!");
        await sendPrayerTimes(ctx, latitude, longitude);
    });

    bot.on('text', async (ctx) => {
        if (ctx.message.text.startsWith('/')) return;
        const locations = await geocodeCity(ctx.message.text);

        if (locations && locations.length > 0) {
            const firstResult = locations[0];
            const { id: chat_id, first_name } = ctx.from;
            await saveUserLocation(chat_id, first_name, firstResult.lat, firstResult.lon);
            await ctx.reply(`✅ Location set to "${firstResult.name}" for daily notifications.`);
            await sendPrayerTimes(ctx, firstResult.lat, firstResult.lon);
        } else {
            await ctx.reply('City not found.');
        }
    });

     bot.launch();
    console.log('Bot is running...');

    // We will use the test cron for now so we can see it work every minute.
    startScheduler(bot, { plannerCron: '* * * * *' });

    process.once('SIGINT', () => bot.stop('SIGINT'));
    process.once('SIGTERM', () => bot.stop('SIGTERM'));
}

main().catch(err => {
    console.error("FATAL: Bot failed to start.", err);
});