// In database.js
const sqlite3 = require('sqlite3');
const { open } = require('sqlite');

let dbPromise;

function initializeDatabase() {
    if (!dbPromise) {
        dbPromise = open({
            filename: './prayerbot.db',
            driver: sqlite3.Database
        }).then(async (db) => {
            await db.exec(`
                CREATE TABLE IF NOT EXISTS users (
                    chat_id INTEGER PRIMARY KEY,
                    first_name TEXT,
                    latitude REAL NOT NULL,
                    longitude REAL NOT NULL,
                    is_active INTEGER DEFAULT 1,
                    timezone TEXT
                )
            `);
            console.log("Database connection is open and 'users' table is ready.");
            return db;
        });
    }
    return dbPromise;
}

async function saveUserLocation(chat_id, first_name, latitude, longitude) {
    const db = await initializeDatabase();
    await db.run(
        `INSERT INTO users (chat_id, first_name, latitude, longitude) VALUES (?, ?, ?, ?)
         ON CONFLICT(chat_id) DO UPDATE SET first_name=excluded.first_name, latitude=excluded.latitude, longitude=excluded.longitude, is_active=1;`,
        [chat_id, first_name, latitude, longitude]
    );
}

async function getAllActiveUsers() {
    const db = await initializeDatabase();
    return await db.all('SELECT * FROM users WHERE is_active = 1');
}

module.exports = {
    initializeDatabase,
    saveUserLocation,
    getAllActiveUsers
};