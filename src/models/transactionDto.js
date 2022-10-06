const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		max: 255
	},
	address: {
		type: String,
		required: true,
		max: 255
	},
	telephone: {
		type: String,
		required: true,
		max: 20
	},
	restaurant: {
		type: String,
		required: true,
		max: 255
	},
	data: {
		type: [],
		required: true
	},
	subtotal: {
		type: String,
		required: true
	},
	deliveryFee: {
		type: String,
		required: true
	},
	total: {
		type: String,
		required: true
	},
	insertDate: {
		type: Date,
		required: true,
		default: new Date()
	}
});

module.exports = mongoose.model('Transaction', transactionSchema);
