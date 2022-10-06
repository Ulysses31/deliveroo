const router = require('express').Router();
const Transaction = require('../models/transactionDto');
const nodemailer = require('nodemailer');

/**
 * @name Transactions
 * @description Get transactions list
 */
router.get('/', async (req, res) => {
	try {
		const transactiones = await Transaction.find();
		// console.log(transactiones);
		return res.json(transactiones);
	} catch (err) {
		return res.status(500).json({
			statusCode: res.statusCode,
			statusMessage: res.statusMessage,
			message: err
		});
	}
});

/**
 * @name Transaction
 * @description Get transaction by id
 */
router.get('/:id', async (req, res) => {
	try {
		const transaction = await Transaction.findById({
			_id: req.params.id
		});
		if (!transaction) return res.json('Transaction not found.');
		// console.log(transaction);
		return res.json(transaction);
	} catch (err) {
		res.status(500).json({
			statusCode: res.statusCode,
			statusMessage: res.statusMessage,
			message: err
		});
	}
});

/**
 * @name Delete Transaction
 * @description Delete a transaction
 */
router.delete('/:id', async (req, res) => {
	try {
		const transaction = await Transaction.deleteOne({
			_id: req.params.id
		});
		// console.log(transaction);
		return res.json(transaction);
	} catch (err) {
		res.status(500).json({
			statusCode: res.statusCode,
			statusMessage: res.statusMessage,
			message: err
		});
	}
});

/**
 * @name Update Transaction
 * @description Update a transaction
 */
router.put('/', async (req, res) => {
	try {
		const transaction = await Transaction.updateOne(
			{ _id: req.body._id },
			{
				$set: {
					name: req.body.name,
					description: req.body.description,
					price: req.body.price,
					image: req.body.image
				}
			}
		);
		// console.log(transaction);
		return res.json(transaction);
	} catch (err) {
		res.status(500).json({
			statusCode: res.statusCode,
			statusMessage: res.statusMessage,
			message: err
		});
	}
});

/**
 * @name Create Transaction
 * @description Create a new transaction
 */
router.post('/', async (req, res) => {
	try {
		const newTransaction = new Transaction({
			name: 'Iordanidis Chris',
			address: 'Address 12 Str',
			telephone: '6934671398',
			restaurant: req.body.restaurant,
			subtotal: parseFloat(req.body.subtotal).toFixed(2),
			deliveryFee: parseFloat(req.body.deliveryFee).toFixed(2),
			total: parseFloat(req.body.total).toFixed(2),
			data: req.body.items
		});
		const transaction = await newTransaction.save();
		console.log(transaction);

		// NodeMailer
		const transporter = nodemailer.createTransport({
			host: 'smtp.mailtrap.io',
			port: 2525,
			auth: {
				user: '62aca8f4c6fb5c',
				pass: 'c5c2a0c292ef5e'
			}
		});

		const info = await transporter.sendMail({
			from: '"Deliveroo" <order@deliveroo.com>', // sender address
			to: 'client@clent.com', // list of receivers
			subject: 'Deliveroo Order Completed ✔', // Subject line
			text: `Your order from restaurant [${
				transaction.restaurant
			}] completed, with details [Subtotal: ${parseFloat(
				transaction.subtotal
			).toFixed(2)} €, Delivery Fee: ${parseFloat(
				transaction.deliveryFee
			).toFixed(2)} €, Total: ${parseFloat(transaction.total).toFixed(
				2
			)} €]`, // plain text body
			html: `Your order from restaurant <b>${
				transaction.restaurant
			}</b> completed, with details. <br/>
			<table cellPadding="2" cellSpacing="2">
				<caption>Items</caption>
				<tbody>
					${newTransaction.data.map((item) => {
						return (
							'<tr>' +
							'<td align="right" style="color: gray">' +
							item.quantity +
							'x</td>' +
							'<td style="color: gray">' +
							item.name +
							'</td>' +
							'<td align="right"><b>' +
							parseFloat(item.total).toFixed(2) +
							'€</b></td>' +
							'</tr>'
						);
					})}
				</tbody>
			</table>
			<p>Subtotal: ${parseFloat(transaction.subtotal).toFixed(2)} €
			<br/> Delivery Fee: ${parseFloat(transaction.deliveryFee).toFixed(
				2
			)} € <br/> <b>Total: ${parseFloat(transaction.total).toFixed(
				2
			)} €</b></p>` // html body
		});

		// NodeMailer

		return res.json({
			transaction,
			EmailMessageId: info.messageId,
			MailPreview: nodemailer.getTestMessageUrl(info)
		});
	} catch (err) {
		return res.status(500).json({
			statusCode: res.statusCode,
			statusMessage: res.statusMessage,
			message: err
		});
	}
});

module.exports = router;
