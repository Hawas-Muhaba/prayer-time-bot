const sqlite3 = require('sqlite3');
const {open} = require('sqlite');

//This is a nasync function that sets up the database connection

async function openDb(){
    return open({
        filename: './prayer.db',//created is the file auto
        driver: sqlite3.Database
    });
}


//intialize the db, create the users table if doesn't exis

async function setupDatabase(){
    const db = await openDb();
    await db.exec(`
            CREATE TABLE IF NOT EXISTS user(
                chat_id INTEGER PRIMARY KEY,
                first_name TEXT,
                latitude REAL NOT NULL,
                longitude REAL NOT NULL,
                is_active INTEGER DEFAULT 1, -- 1 for true (active), 0 for false (paused)
                timezone TEXT
            )
        `);
        console.log("Database setup complete. users table is ready");
        await db.close();
}

//save or update users info in the db, UPSERT operation
async function saveUserLocation(chat_id, first_name, latitude,longitude) {
    const db = await openDb();
    
    //update their detail instead of trying new row insertion
    await db.run(
        `INSERT INTO user (chat_id, first_name, latitude, longitude)
         VALUES (?, ?, ?, ?)
         ON CONFLICT(chat_id) DO UPDATE SET
            first_name = excluded.first_name,
            latitude = excluded.latitude,
            longitude = excluded.longitude,
            is_active = 1;
        `, 
        [chat_id,first_name,latitude,longitude]
    );
    await db.close();
    
}

async function getAllActiveUsers(){
    const db = await openDb();
    const users = await db.all('SELECT * FROM user WHERE is_active = 1');
    await db.close();
    return users;
}

module.exports = {setupDatabase, saveUserLocation, getAllActiveUsers};