const jwt = require("jsonwebtoken");
require('dotenv').config();

module.exports = (req, res, next) => {
    try {
        if (!req.headers.cookie) {
            res.redirect('/')

        }

        const cookie = req.headers.cookie.split(";").find(c => c.split("=")[0].trim() == "accessToken")
        const token = cookie?.split("=")?.[1];
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        req.userData = decoded;
        next();
    } catch (error) {
        res.redirect('/')
    }
}
