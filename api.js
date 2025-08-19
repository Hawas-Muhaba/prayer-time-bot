const axios = require('axios');

async function getPrayerTimes(latitude, longitude) {
    const url = `https://api.aladhan.com/v1/timings?latitude=${latitude}&longitude=${longitude}&method=2`;

    try {
        const response = await axios.get(url);
        const prayerTimes = response.data.data.timings;
        // console.log("Prayer Times:", prayerTimes);
        return prayerTimes;
    } catch (error) {
        console.error("Failed to fetch prayer times:", error.message);
        return null;
    }
}

module.exports = { getPrayerTimes };