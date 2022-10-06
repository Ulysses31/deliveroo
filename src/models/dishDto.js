const mongoose = require('mongoose');

const dishSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		max: 255
	},
	description: {
		type: String,
		required: true,
		max: 255
	},
	price: {
		type: String,
		required: true
	},
	image: {
		type: String,
		required: true,
		max: 255
	}
});

module.exports = mongoose.model('Dish', dishSchema);
