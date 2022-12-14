const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		max: 255
	},
	image: {
		type: String,
		required: true,
		max: 255
	}
});

module.exports = mongoose.model('Category', categorySchema);
