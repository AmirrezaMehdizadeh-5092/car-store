const mongose = require("mongoose");

const CarsInfo = mongose.Schema({
	name:
	{
		type: String,
		required: true,
		index:
		{
			unique: true,
			dropDups: true
		}
	},
	color:
	{
		type: String,
		required: true,
	},
	category:
	{
		type: String,
		required: true,
	},
	price:
	{
		type: String,
		required: true,
	},
	commiunity:
	{
		type: String,
		required: true,
	},
	image:
	{
		type: String,
		required: true,
		index:
		{
			unique: true,
			dropDups: true
		}
	},
	href:
	{
		type: String,
		required: true,
		index:
		{
			unique: true,
			dropDups: true
		}
	},
	discription:
	{
		type: String,
		required : true,
	},
	height:
	{
		type: String,
		required: true,
	},
	width:
	{
		type: String,
		required: true,
	},
	ertefa:
	{
		type: String,
		required: true,
	},
	weight:
	{
		type: String,
		required: true,
	},
	makhzan_sookht:
	{
		type: String,
		required: true,
	},
	sandoogh_bar:
	{
		type: String,
		required: true,
	},
	joinDate:
	{
		type: Date,
		default: Date.now
	}
})

Car = mongose.model("Car", CarsInfo);
module.exports = Car;