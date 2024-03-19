const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const app = express();
const port = 8088;
require("dotenv").config();
const cookieParser = require("cookie-parser");
const db = require("./database.js");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// get the username out of the jwt token
const getUsername = (accessToken) => {
    const decodedToken = jwt.decode(accessToken, process.env.ACCESS_TOKEN_SECRET);
    const email = decodedToken.email;
    const password = decodedToken.password;
    console.log(email, password);
    return { username, password };
}

const getEmailAndPassword = (accessToken) => {
    const decodedToken = jwt.decode(accessToken, key);
    const username = decodedToken.username;
}

// generate the jwt token with a username
const generateToken = (email, password) => {
    const payload = { email, password };
    const options = { expiresIn: '8h' };
    const key = process.env.ACCESS_TOKEN_SECRET;

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

app.post('/login', async (req, res) => {
    let valid;
    const token = req.cookies.token;
    const email = req.body.email;
    const password = req.body.password;

    try {
        valid = await db.validateUserLogin(email, password);
    } catch(error) {
        res.sendStatus(500, error);
    }

    if (valid == true) {
        res.sendStatus(200);
    } else if (valid == false) {
        res.sendStatus(401);
    } else {
        res.sendStatus(500);
    }
})