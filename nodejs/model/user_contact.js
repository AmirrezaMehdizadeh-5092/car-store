const mongose = require("mongoose");

const UserContactInfo = mongose.Schema({
	name:
	{
		type:String,
	    required:true,
	},
	email:
	{
		type:String,
	    minLength:9,
	    maxlength:100,
	    required:true,
	    index:
	    {
	      unique:true,
	      dropDups:true
	    }
	},
	subject:
	{
		type:String,
	},
	message:
	{
		type:String,
	    minLength:2,
	    maxlength:150,
	    required:true,
	},
    joinDate:
    {
      type:Date,
      default : Date.now
    }
})

UserContact = mongose.model("UserContact" , UserContactInfo);
module.exports = UserContact;