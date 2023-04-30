const mongose = require("mongoose");

const CartInfo = mongose.Schema({
    user_id:
    {
        type: String,
        required: true,
    },
    car_id:
    {
        type: String,
        required: true,
    },
    car_name:
    {
        type: String,
        required: true,
    },
    car_image:
    {
        type: String,
        required: true,
    },
    color:
    {
        type: String,
        required: true,
    },
    car_price:
    {
        type: String,
        required: true,
    },
    amount:
    {
        type: String,
        required: true,
    },
    total:
    {
        type: String,
        required: true,
    },
    status:
    {
        type: String,
    },
    trac_code:
    {
        type : String,
    },
    joinDate:
    {
        type: Date,
        default: Date.now
    },
})

Cart = mongose.model("Cart", CartInfo);
module.exports = Cart;