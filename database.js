// In database.js
const { Pool } = require('pg'); // Import the pg Pool library

// The Pool will automatically use the DATABASE_URL from your .env file or Railway variables.
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    // This is important for many cloud database providers (like Heroku, Railway, etc.)
    // It allows connections to databases that use self-signed certificates.
    ssl: {
        rejectUnauthorized: false
    }
});

let isDbInitialized = false;

/**
 * Initializes the database connection and creates the 'users' table if it doesn't exist.
 * This function ensures the setup code runs only once.
 */
async function initializeDatabase() {
    // If already initialized, do nothing.
    if (isDbInitialized) {
        return;
    }
    
    console.log("Initializing PostgreSQL database connection...");
    // A "client" is a single connection from the pool.
    const client = await pool.connect(); 
    try {
        // We use dollar-sign placeholders ($1, $2) for PostgreSQL instead of question marks (?).
        // Data types are more specific: BIGINT for chat_id, DOUBLE PRECISION for lat/lon, BOOLEAN for is_active.
        await client.query(`
            CREATE TABLE IF NOT EXISTS users (
                chat_id BIGINT PRIMARY KEY,
                first_name TEXT,
                language_code VARCHAR(10) DEFAULT 'en',
                latitude DOUBLE PRECISION,
                longitude DOUBLE PRECISION,
                is_active BOOLEAN DEFAULT true,
                timezone TEXT
            );
        `);
        console.log("'users' table is ready.");
        isDbInitialized = true; // Set the flag so this doesn't run again.
    } catch (err) {
        console.error("FATAL: Error initializing database table:", err);
        // If the table can't be created, the bot can't function.
        // It's better to exit so the deployment service restarts it.
        process.exit(1); 
    } finally {
        // IMPORTANT: Always release the client back to the pool when you're done with it.
        client.release();
    }
}

/**
 * Saves or updates a user's location and language. This is an "UPSERT".
 */
async function saveUserLocation(chat_id, first_name, latitude, longitude) {
    const query = `
        INSERT INTO users (chat_id, first_name, latitude, longitude, is_active)
        VALUES ($1, $2, $3, $4, true)
        ON CONFLICT (chat_id) DO UPDATE SET
            first_name = EXCLUDED.first_name,
            latitude = EXCLUDED.latitude,
            longitude = EXCLUDED.longitude,
            is_active = true;
    `;
    await pool.query(query, [chat_id, first_name, latitude, longitude]);
}

/**
 * Updates or creates a user just to set their language preference.
 */
async function setUserLanguage(chat_id, language_code) {
    const query = `
        INSERT INTO users (chat_id, language_code) VALUES ($1, $2)
        ON CONFLICT (chat_id) DO UPDATE SET language_code = EXCLUDED.language_code;
    `;
    await pool.query(query, [chat_id, language_code]);
}

/**
 * Retrieves a single user's data from the database.
 */
async function getUser(chat_id) {
    const result = await pool.query('SELECT * FROM users WHERE chat_id = $1', [chat_id]);
    return result.rows[0]; // Returns the first row found, or undefined if no user is found.
}

/**
 * Retrieves all users who have notifications enabled.
 */
async function getAllActiveUsers() {
    const result = await pool.query('SELECT * FROM users WHERE is_active = true');
    return result.rows;
}

/**
 * Sets a user's notification preference (active or paused).
 */
async function setUserActive(chat_id, isActive) {
    await pool.query('UPDATE users SET is_active = $1 WHERE chat_id = $2', [isActive, chat_id]);
}

/**
 * Deletes a user from the database.
 */
async function deleteUser(chat_id) {
    await pool.query('DELETE FROM users WHERE chat_id = $1', [chat_id]);
}

/**
 * Counts the total number of users in the database.
 */
async function getTotalUserCount() {
    const result = await pool.query('SELECT COUNT(*) as count FROM users');
    // The result from pg is a string, so we parse it to an integer.
    return parseInt(result.rows[0].count, 10);
}


// Export all the functions so index.js and scheduler.js can use them.
module.exports = {
    initializeDatabase,
    saveUserLocation,
    setUserLanguage,
    getUser,
    getAllActiveUsers,
    setUserActive,
    deleteUser,
    getTotalUserCount
};