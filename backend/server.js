const express = require("express");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const app = express();
const port = 8080;
const { json } = require("body-parser");
require("dotenv").config();
const path = require("path");
const cookieParser = require("cookie-parser");
const nodemailer = require("nodemailer");
const multer = require("multer");
const { callbackPromise } = require("nodemailer/lib/shared/index.js");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const db = require("./database.js");
const checkAuth = require("./middleware/check-auth");
const sqlite3 = require("sqlite3").verbose();
const Chart = require('chart.js');
const { CanvasRenderService } = require('chartjs-node-canvas');
const { emit } = require("process");


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
    const email = req.body.email;
    const password = req.body.password;
    console.log(email);
    const valid = await db.validateUserCredentials(email);

    if (valid == undefined) {
        const succesfull = await db.insertUser(email, password);
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
    const token = req.cookies.token;
    const email = req.body.email;
    const password = req.body.password;

    const valid = await db.validateUserLogin(email, password);

    if (valid == true) {
        res.sendStatus(200);
    } else if (valid == false) {
        res.sendStatus(401);
    } else {
        res.send(500);
    }
})