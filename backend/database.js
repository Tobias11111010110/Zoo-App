const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcrypt');
const saltRounds = 10;

// Open the database connection
let db = new sqlite3.Database('./database/database.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the database.');
});

async function validateUserCredentials(email) {
    return new Promise((resolve, reject) => {
        const getQuery = 'SELECT * FROM User WHERE Email = ?';

        db.get(getQuery, [email], (err, row) => {
            if (err) {
                reject(err);
            } else {
                resolve(row);
            }
        });
    })
}

async function insertUser(email, password) {
    return new Promise((resolve, reject) => {
        const hashedPassword = bcrypt.hashSync(password, saltRounds);
        const insertQuery = 'INSERT INTO User (email, Passwort) VALUES (?, ?)';

        db.run(insertQuery, [email, hashedPassword], (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(true);
            }
        });
    });
}

async function validateUserLogin(email, password) {
    const exists = await validateUserCredentials(email);
    console.log(exists)

    return new Promise((resolve, reject) => {
        if (exists == undefined) {
            resolve(false)
        } else {
            bcrypt.compare(password, exists.Passwort, (err, result) => {
                if (err) {
                    reject(err);
                } else if (result) {
                    resolve(true);
                } else {
                    resolve(false);
                }
            });
        }
    })
};


module.exports = {
    validateUserCredentials,
    insertUser,
    validateUserLogin
};



