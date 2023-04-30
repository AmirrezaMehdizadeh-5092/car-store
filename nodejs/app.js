// package
const express = require('express');
const app = express();
const bodyparser = require("body-parser");
const session = require('express-session')
const cookieParser = require('cookie-parser')
const cors = require('cors');
const mongoose = require("mongoose");
const MongoDBStore = require('connect-mongodb-session')(session);
require('dotenv').config();

// database configuration
mongoose.connect("mongodb://localhost/CarStore");
const db = mongoose.connection;
db.once("open", () => {
    console.log("database is connected");
})

// session configuration
const store = new MongoDBStore({
    uri: 'mongodb://localhost/CarStore',
    collection: 'mySessions'
});

// requirements settings
app.set('view engine', 'ejs');
app.set("views", "./views");
app.use(express.json())
app.use(bodyparser.urlencoded([extended = true]));
app.use(express.static("public"));
app.use(cors())
app.use(cookieParser('SsecretKeyForsessionn'));
app.set('trust proxy', 1)
app.use(session({
    secret: 'SsecretKeyForsessionn',
    store: store
}));

// middweres
const midd = (req, res, next) => {
    //const token = req.headers['x-auth'];
    const token = req.session.token;
    if (!token) return res.status(401).json({ error: "ابتدا به حساب خود وارد شوید" });
    else {
        const decoded = jwt.verify(token, process.env.secret, (err, decoded) => {
            if (err) return res.status(401).json({ error: "ابتدا به حساب خود وارد شوید" });
            else {
                console.log(decoded);
            }
        });
    }
}

// use index.js for routing
const index = require("./rout/index");
app.use("/", index);

// run server
app.listen(process.env.port, () => {
    console.log("server is running on port " + process.env.port);
});