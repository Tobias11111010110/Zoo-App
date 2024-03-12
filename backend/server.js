const express = require("express");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const app = express();
const port = 8088;
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
//Chat Room
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());




server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


function getUsername(accessToken) {
    const decodedToken = jwt.decode(accessToken, process.env.ACCESS_TOKEN_SECRET);
    const username = decodedToken.username;
    console.log(username);
    return username
}
