const mongose = require("mongoose");

const CommentInfo = mongose.Schema({
    name:
    {
        type: String,
        required: true,
    },
    email:
    {
        type: String,
        minLength: 9,
        maxlength: 100,
        required: true,
    },
    message:
    {
        type: String,
        minLength: 2,
        maxlength: 150,
        required: true,
    },
    product_id:
    {
        type: String,
        required: true,
    },
    joinDate:
    {
        type: Date,
        default: Date.now
    },
})

Comment = mongose.model("Comment", CommentInfo);
module.exports = Comment;