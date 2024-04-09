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
                console.log('Row in database: ' + row);
            }
        });
    })
}

async function insertUser(email, password) {
    return new Promise((resolve, reject) => {
        let hashedPassword = '';
        try {
            hashedPassword = bcrypt.hashSync(password, saltRounds);
        } catch(error) {
            reject(error);
            return;
        }
        const insertQuery = 'INSERT INTO User (Email, Password) VALUES (?, ?)';

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

    return new Promise((resolve, reject) => {
        if (exists == undefined) {
            resolve(false);
        } else {
            bcrypt.compare(password, exists.Password, (err, result) => {
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

async function insertTicket(type, price, duration, date, userID) {
    const query = 'INSERT INTO Ticket (Type, Price, Duration, Date, fk_userID) VALUES (?,?,?,?,?)';
    return new Promise((resolve, reject) => {
        db.run(query, [type, price, duration, date, userID], (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(true);
            }
        })
    })
}

async function getUserID(email) {
    const query = 'SELECT * FROM User WHERE email = ?';
    return new Promise((resolve, reject) => {
        db.get(query, [email], (err, row) => {
            if (err) {
                reject(err);
            } else {
                resolve(row.Id);
            }
        })
    })
}

async function getAllTicketsFromUser(userID) {
    const query = 'SELECT * FROM Ticket WHERE fk_userID = ?';
    return new Promise((resolve, reject) => {
        db.all(query, [userID], (err, row) => {
            if (err) {
                reject(err);
            } else {
                resolve(row);
            }
        })
    })
}

async function getLastVariant(userID, Date) {
    const query = 'SELECT * FROM Ticket WHERE fk_userID = ? AND Date = ?'
    return new Promise((resolve, reject) => {
        db.all(query, [userID, Date], (err, row) => {
            if (err) {
                reject(err);
            } else {
                resolve(row);
            }
        })
    })
}

async function saveReview(userID, stars, text) {
    const query = 'INSERT INTO Review (fk_userID, Stars, text) VALUES (?,?,?)';
    return new Promise((resolve, reject) => {
        db.run(query, [userID, stars, text], (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(true);
            }
        })
    })
}

async function getReviews() {
    const query = 'SELECT * FROM review';
    return new Promise((resolve, reject) => {
        db.all(query, (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        })
    })
}


module.exports = {
    validateUserCredentials,
    insertUser,
    validateUserLogin,
    insertTicket,
    getUserID,
    getLastVariant,
    getAllTicketsFromUser,
    getLastVariant,
    saveReview,
    getReviews
};



