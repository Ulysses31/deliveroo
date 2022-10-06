const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
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
	lat: {
		type: String,
		required: true
	},
	long: {
		type: String,
		required: true
	},
	address: {
		type: String,
		required: true,
		max: 255
	},
	rating: {
		type: String,
		required: true
	},
	categoryId: {
		type: String,
		required: true
	},
	image: {
		type: String,
		required: true,
		max: 255
	},
	dishes: {
		type: [mongoose.ObjectId],
		default: []
	}
});

module.exports = mongoose.model('Restaurant', restaurantSchema);
