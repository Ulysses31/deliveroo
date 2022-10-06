const mongoose = require('mongoose');

const featuredSchema = new mongoose.Schema({
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
	restaurants: {
		type: [mongoose.ObjectId],
		default: []
	}
});

module.exports = mongoose.model('Featured', featuredSchema);
