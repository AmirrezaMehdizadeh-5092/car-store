const mongose = require("mongoose");

const UserInfo = mongose.Schema({
    username :
    {
        type:String,
        minLength:4,
        maxlength:20,
        required:true,
    },
	password:
	{
		type:String,
	    minLength:6,
	    maxlength:100,
	    required:true,
	    index:
	    {
	      unique:true,
	      dropDups:true
	    }
	},
	email:
	{
		type:String,
	    maxlength:100,
	    required:true,
	    index:
	    {
	      unique:true,
	      dropDups:true
	    }
	},
    money:
    {
        type : String,
    },
	buying:
	{
		typeof:String,
	},
    joinDate:
    {
      type:Date,
      default : Date.now
    }
})

User = mongose.model("User" , UserInfo);
module.exports = User;