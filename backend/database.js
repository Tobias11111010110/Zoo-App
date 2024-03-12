const sqlite3 = require("sqlite3").verbose();
let db;


// Open the database

function openDb() {
    return new Promise((resolve, reject) => {
        db = new sqlite3.Database(
            "database/databse.db",
            sqlite3.OPEN_READWRITE,
            (err) => {
                if (err) {
                    return reject(err);
                }
                console.log("Connected to the database.");
                resolve();
            }
        );
    });
}

module.exports = {

};



