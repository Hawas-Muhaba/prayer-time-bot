// geocode.js
require('dotenv').config();
const axios = require('axios');

const API_KEY = process.env.OPENWEATHER_API_KEY;
if (!API_KEY) {
  console.error('ERROR: OPENWEATHER_API_KEY is not set in .env');
  // We don't exit so other code can still be required in tests, but calls will fail gracefully.
}

/**
 * geocodeCity
 * Input: city (string), optional limit (number)
 * Output: array of { name, lat, lon, country, state }
 */
async function geocodeCity(city, limit = 5) {
  if (!city || typeof city !== 'string') {
    throw new Error('geocodeCity: city is required and must be a string');
  }

  const q = encodeURIComponent(city.trim());
  const url = `https://api.openweathermap.org/geo/1.0/direct?q=${q}&limit=${limit}&appid=${API_KEY}`;

  try {
    const res = await axios.get(url);
    const data = res.data;

    if (!Array.isArray(data) || data.length === 0) {
      return [];
    }

    // Normalize results to a simple shape
    return data.map((item) => ({
      name: item.name,
      lat: item.lat,
      lon: item.lon,
      country: item.country,
      state: item.state || null,
    }));
  } catch (err) {
    // Log useful debug info (don't log raw API key)
    console.error('geocodeCity error:', err.response ? err.response.data : err.message);
    return [];
  }
}

module.exports = { geocodeCity };
