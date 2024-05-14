const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const app = express();
const port = 8088;
require("dotenv").config();
const cookieParser = require("cookie-parser");
const db = require("./database.js");
const key = process.env.ACCESS_TOKEN_SECRET;
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.json());
app.use(cors());

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

const getEmailAndPasswordFromToken = (accessToken) => {
    const decodedToken = jwt.decode(accessToken, key);
    const email = decodedToken.email;
    const password = decodedToken.password;

    return { email, password };
}

// generate the jwt token with a username
const generateToken = (email, password) => {
    const payload = { email, password };
    const options = { expiresIn: '8h' };

    return jwt.sign(payload, key, options);
};

app.post('/registration', async (req, res) => {
    let valid;
    let succesfull;
    const email = req.body.email;
    const password = req.body.password;

    try {
        valid = await db.validateUserCredentials(email);
    } catch(error) {
        res.sendStatus(500);
    }

    if (valid == undefined) {
        try {
            succesfull = await db.insertUser(email, password);
        } catch(error) {
            res.sendStatus(500);
        }
        if (succesfull) {
            const token = generateToken(email, password);
            res.cookie(token);
            res.sendStatus(200);
        }
    } else {
        res.sendStatus(401);
    }
});

const authenticateToken = (req, res, next) => {
    const token = req.cookies.token;
    if (token == null) {
      res.sendStatus(401);
    }

    jwt.verify(token, key, (err, user) => {
      if (err) {
        console.log(err.message);
        res.sendStatus(401);
      }
      req.user = user;
      next();
    });
  };

app.post('/login', async (req, res) => {
    let valid;
    const email = req.body.email;
    const password = req.body.password;
    const token = generateToken(email, password);
    console.log(email, password);

    try {
        valid = await db.validateUserLogin(email, password);
    } catch(error) {
        res.sendStatus(500, error);
    }

    console.log(valid);

    if (valid == true) {
        res.cookie('token', token);
        res.sendStatus(200);
    } else if (valid == false) {
        res.sendStatus(401);
    } else {
        res.sendStatus(500);
    }
})

app.post('/submitTickets', authenticateToken, async (req, res) => {
    const tickets = req.body.tickets;
    const email = getEmailAndPasswordFromToken(req.cookies.token).email;
    const userID = await db.getUserID(email);
    console.log('userID: ' + userID);

    if (tickets != undefined) {
        try {
            await tickets.forEach(ticket => {
                db.insertTicket(ticket.Type, ticket.Price, ticket.Duration, ticket.Date, userID);
            });

            res.sendStatus(200);
        } catch(error) {
            res.sendStatus(500);
        }

        console.log('finished');
    }
})

app.post('/submitReview', authenticateToken, async(req, res) => {
    let success;
    const email = getEmailAndPasswordFromToken(req.cookies.token).email;
    const userID = await db.getUserID(email);

    try {
        success = await db.saveReview(userID, req.body.Stars, req.body.Text);
    } catch(err) {
        res.sendStatus(500);
    }

    if (success) {
        res.sendStatus(200);
    }
})

app.get('/getReviews', authenticateToken, async(req ,res) => {
    try {
        const reviews = await db.getReviews();
        res.send(reviews);
    } catch(err) {
        res.sendStatus(500);
    }
})

app.get('/getLastPurchase', authenticateToken, async (req, res) => {
    let date;
    let lastVariant;
    const email = getEmailAndPasswordFromToken(req.cookies.token).email;
    const userID = await db.getUserID(email);

    try {
        date = await db.getLastBuyDateFromUser(userID);
    } catch(err) {
        res.sendStatus(500);
    }

    if (date.length != 0) {
        date = date[0].Date;
    } else {
        res.sendStatus(400);
        return;
    }

    try {
        lastVariant = await db.getLastPurchase(userID, date);
    } catch(err) {
        res.sendStatus(500)
    }

    res.send(lastVariant);
})