// package
const express = require('express');
const app = express();
const bodyparser = require("body-parser");
const cors = require('cors');
const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { body, validationResult } = require('express-validator');
const emailValidator = require('deep-email-validator');
const nodemailer = require("nodemailer");
//require('dotenv').config();

const port = 9856
const secret = 'amirreza'
// database configuration
//mongoose.connect('mongodb://127.0.0.1:27017/CarStore').then(() => console.log('Database connected ...'));

mongoose.connect(process.env.DATABASE_URL, {
    authSource: "admin"
})

mongoose.connection.on("open", function () {
    console.log("connecteed to db")
})

// requirements settings
app.set('view engine', 'ejs');
app.set("views", "./views");
app.use(express.json())
app.use(bodyparser.urlencoded([extended = true]));
app.use(express.static("public"));
app.use(cors())
app.set('trust proxy', 1)

// middweres
const midd = (req, res, next) => {
    //const token = req.headers['x-auth'];
    const token = req.session.token;
    if (!token) return res.status(401).json({ error: "ابتدا به حساب خود وارد شوید" });
    else {
        const decoded = jwt.verify(token, secret, (err, decoded) => {
            if (err) return res.status(401).json({ error: "ابتدا به حساب خود وارد شوید" });
            else {
                console.log(decoded);
            }
        });
    }
}

/* use index.js for routing
const index = require("./rout/index");
app.use("/", index);*/

const Cars = require("./model/cars");
const User = require("./model/user");
const UserContact = require("./model/user_contact");
const UserCommnent = require("./model/comment");
const Cart = require("./model/cart");

// email validation function
async function isEmailValid(email) {
    return emailValidator.validate(email)
}

// routes
app.get("/", async (req, res) => {
    best_sellers = await Cars.find().sort({ commiunity: -1 })
    res.send(best_sellers)
})

app.post("/register", body('email').isEmail().withMessage('ایمیل نامعتبر است'), body('password').matches("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,16}$").withMessage('پسورد باید شامل یک حرف بزرگ و عدد باشد'), async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        if (errors['errors'][0]['param']) {
            return res.status(400).json({ error: errors['errors'][0]['msg'] });
        }
    }
    else {
        name = req.body.name;
        email = req.body.email;
        password = req.body.password;
        const hash = bcrypt.hashSync(password, 8);
        //const valid = await isEmailValid(email);
        /*if (valid['valid'] == false) {
            return res.status(400).json({ error: 'لطفا ایمیل درستی را وارد نمایید' });
        }*/

        found_email3 = await User.findOne({ email: email });
        if (found_email3) {
            res.status(400).json({ error: 'چنین ایمیلی قبلا ثبت شده است' });
        }
        else {
            NewUser = new User({
                username: name,
                password: hash,
                email: email,
                money: "",
                buying: ""
            })
            NewUser.save()
            res.status(200).json({ error: 'ثبت نام شما انجام شد' })
        }
    }
})

app.post("/login", async (req, res) => {
    email = req.body.email;
    password = req.body.password;
    found_email1 = await User.findOne({ email: email });
    if (!found_email1) {
        res.status(400).json({ error: 'چنین حسابی وجود ندارد' });
    }
    else {
        const find = bcrypt.compareSync(password, found_email1.password);
        if (!find) {
            res.status(400).json({ error: 'پسورد اشتباه است. لطفا دوباره امتحان کنید' });
        }
        else {
            const token = jwt.sign({ email: found_email1.email, id: found_email1._id }, secret, {
                algorithm: "HS256",
            })
            //localStorage.setItem("token", token);
            //req.session.jwtoken = token;
            res.status(200).send(token);
        }
    }
})

app.post("/contact", async (req, res) => {
    name = req.body.name;
    email = req.body.email;
    subject = req.body.subject;
    msg = req.body.msg;
    found_email = await UserContact.findOne({ email: email });
    if (found_email) {
        res.status(400).json({ error: 'چنین ایمیلی قبلا ثبت شده است' })
    }
    else {
        const NewUserConatct = new UserContact({
            name: name,
            email: email,
            subject: subject,
            message: msg,
        })
        NewUserConatct.save()
        res.status(200).json({ error: 'نظر شما ثبت شد. با تشکر از همکاری شما.' })
    }

})

app.post("/product", async (req, res) => {
    pro_link = req.body.link;
    found_pro = await Cars.findOne({ _id: pro_link })
    if (found_pro) {
        res.status(200).json(found_pro);
    }
})

app.post("/product2", async (req, res) => {
    id = req.body.link2;
    found_pro2 = await Cars.findOne({ _id: id })
    if (found_pro2) {
        res.status(200).json(found_pro2);
    }
})

app.post("/product/add_commnet", async (req, res) => {
    name = req.body.name;
    email = req.body.email;
    message = req.body.message;
    pro_id = req.body.pro_id;
    found_email4 = await UserCommnent.findOne({ email: email })
    if (found_email4) {
        res.status(400).json({ error: "این ایمیل قبلا ثبت شده است" });
    }
    else {
        NewCommnet = new UserCommnent({
            name: name,
            email: email,
            message: message,
            product_id: pro_id,
        })
        NewCommnet.save(function (err, user) {
            console.log(err)
            if (err) {
                res.status(400).json({ error: 'مشکلی رخ داد مجددا امتحان کنید.' })
            }
            else {
                res.status(200).json({ error: 'نظر شما ثبت شد. با تشکر' })
            }
        })
    }
})

app.post("/product/show_comment", async (req, res) => {
    pro_id = req.body.pro_id;
    found_id = await UserCommnent.findOne({ product_id: pro_id });
    if (!found_id) {
        res.status(400).json({ error: "برای این محصول نظری ثبت نشده است. شما اولین نفری باشید که نظر می دهید" });
    }
    else {
        res.status(200).json(found_id)
    }
})

app.post("/product/show_comment2", async (req, res) => {
    pro_id2 = req.body.pro_id2;
    found_id2 = await UserCommnent.find({ product_id: pro_id2 });
    if (found_id2) {
        res.status(200).json(found_id2)
    }
})

app.post("/auth", (req, res) => {
    token = req.body.token
    const decoded = jwt.verify(token, secret, (err, decoded) => {
        if (err) return res.status(400).json({ error: "توکن نامعتبر" });
        else {
            res.status(200).json(decoded)
        }
    });
})

app.post("/cart", async (req, res) => {
    token = req.body.token;
    pro_id = req.body.pro_id;
    amount = req.body.amount;
    total = req.body.total;
    const decoded = jwt.verify(token, secret);
    find_p = await Cart.findOne({ car_id: pro_id });
    if (find_p) {
        return res.status(400).json({ error: "محصول مورد نظر قبلا به سبد خرید اضافه شده است" })
    }
    else {
        find_pro = await Cars.findOne({ _id: pro_id });
        if (find_pro) {
            NewCart = new Cart({
                user_id: decoded.id,
                car_id: pro_id,
                car_name: find_pro.name,
                car_image: find_pro.image,
                car_price: find_pro.price,
                amount: amount,
                total: total,
                color: find_pro.color,
                status: "temporary",
                trac_code: "",
            })
            NewCart.save();
            res.status(200).json({ error: "محصول مورد نظر به سبد خرید اضافه شد" })
        }
        else {
            res.status(400).json({ error: 'مشکلی رخ داد مجددا امتحان کنید' })
        }
    }
})

app.post("/get_cart", async (req, res) => {
    user_id = req.body.user_id;
    pro_from_user_id = await Cart.find({ user_id: user_id })
    res.status(200).json(pro_from_user_id);
})

app.post("/del_cart", async (req, res) => {
    token = req.body.token;
    pro_id = req.body.pro_id;
    const user = jwt.verify(token, secret);
    FindUser = await Cart.findOne({ user_id: user.id });
    if (FindUser) {
        await Cart.deleteOne({ car_id: pro_id });
        return res.status(200).json({ error: "محصول مورد نظر با موفقیت حذف شد" })
    }
    else {
        return res.status(400).json({ error: "مشکلی رخ داد. لطفا مجددا تلاش کنید" })
    }

})

app.post("/order", async (req, res) => {
    let min = Math.ceil(10000);
    let max = Math.floor(99990);
    let rand = Math.floor(Math.random() * (max - min + 1)) + min;
    token = req.body.token;
    const user = jwt.verify(token, secret);
    const filter = { user_id: user.id }
    const doc = { $set: { status: "ordered", trac_code: rand } }
    await Cart.updateOne(filter, doc);
    res.status(200).json({ error: "سفارش شما ثبت شد" });
    FindUser = await User.findOne({ _id: user.id })
    const msg_text = 'سفارش شما ثبت شد. کد رهگیری سفارش :\n' + rand;
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'fortestprogramming@gmail.com',
            pass: 'zmuoyhiidlhelefd'
        }
    });
    var mailOptions = {
        from: 'fortestprogramming@gmail.com',
        to: FindUser.email,
        subject: 'ثبت سفارش',
        text: msg_text
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('user is registerd.the email sent');
        }
    });
})

app.post("/select", async (req, res) => {
    select = req.body.sel;
    if (select == 1) {
        best_sellers = await Cars.find().sort({ commiunity: -1 })
        res.status(200).json(best_sellers);
    }
    if (select == 2) {
        cheap = await Cars.find().sort({ price: 1 })
        res.status(200).json(cheap);
    }
    if (select == 3) {
        exp = await Cars.find().sort({ price: -1 });
        res.status(200).json(exp);
    }
})

app.post("/dash", async (req, res) => {
    token = req.body.token;
    const user = jwt.verify(token, secret);
    find = await User.findOne({ _id: user.id });
    res.status(200).json(find);
})

app.post("/dash2", async (req, res) => {
    token = req.body.token;
    const user = jwt.verify(token, secret);
    find = await Cart.find({ user_id: user.id, status: "ordered" });
    res.status(200).json(find);
})

// run server
app.listen(port, () => {
    console.log("server is running on port " + port);
});