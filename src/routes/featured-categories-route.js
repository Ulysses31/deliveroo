const router = require('express').Router();
const Featured = require('../models/featuredDto');
const ObjectId = require('mongodb').ObjectId;

/**
 * @name Featured
 * @description Get Featured list
 */
router.get('/', async (req, res) => {
	try {
		const featured = await Featured.find();
		// console.log(featured);
		return res.json(featured);
	} catch (err) {
		return res.status(500).json({
			statusCode: res.statusCode,
			statusMessage: res.statusMessage,
			message: err
		});
	}
});

/**
 * @name Featured
 * @description Get featured by id
 */
router.get('/:id', async (req, res) => {
	try {
		// const featured = await Featured.findById({
		// 	_id: req.params.id
		// });

		const id = req.params.id;

		const featured = await Featured.aggregate([
			{
				$lookup: {
					from: 'restaurants',
					localField: 'restaurants',
					foreignField: '_id',
					as: 'restaurants',
					pipeline: [
						{
							$lookup: {
								from: 'categories',
								localField: 'categoryId',
								foreignField: '_id',
								as: 'category'
							}
						},
						{
							$lookup: {
								from: 'dishes',
								localField: 'dishes',
								foreignField: '_id',
								as: 'dishes'
							}
						}
					]
				}
			},
			{
				$match: {
					_id: new ObjectId(id)
				}
			}
		]);

		if (!featured) return res.json('Featured not found.');
		// console.log(featured);
		return res.json(featured);
	} catch (err) {
		res.status(500).json({
			statusCode: res.statusCode,
			statusMessage: res.statusMessage,
			message: err.message
		});
	}
});

/**
 * @name Delete Featured
 * @description Delete a featured
 */
router.delete('/:id', async (req, res) => {
	try {
		const featured = await Featured.deleteOne({
			_id: req.params.id
		});
		// console.log(featured);
		return res.json(featured);
	} catch (err) {
		res.status(500).json({
			statusCode: res.statusCode,
			statusMessage: res.statusMessage,
			message: err
		});
	}
});

/**
 * @name Update Featured
 * @description Update a featured
 */
router.put('/', async (req, res) => {
	try {
		const featured = await Featured.updateOne(
			{ _id: req.body._id },
			{
				$set: {
					name: req.body.name,
					description: req.body.description,
					restaurants: req.body.restaurants
				}
			}
		);
		// console.log(featured);
		return res.json(featured);
	} catch (err) {
		res.status(500).json({
			statusCode: res.statusCode,
			statusMessage: res.statusMessage,
			message: err
		});
	}
});

/**
 * @name Create Featured
 * @description Create a new featured
 */
router.post('/', async (req, res) => {
	try {
		const newFeatured = new Featured({
			name: req.body.name,
			description: req.body.description,
			restaurants: req.body.restaurants
		});
		const featured = await newFeatured.save();
		// console.log(featured);
		return res.json(featured);
	} catch (err) {
		return res.status(500).json({
			statusCode: res.statusCode,
			statusMessage: res.statusMessage,
			message: err
		});
	}
});

module.exports = router;
