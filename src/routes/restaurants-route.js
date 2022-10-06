const router = require('express').Router();
const Restaurant = require('../models/restaurantDto');
const ObjectId = require('mongodb').ObjectId;

/**
 * @name Restaurants
 * @description Get restaurants list
 */
router.get('/', async (req, res) => {
	try {
		const restaurants = await Restaurant.find();
		// console.log(restaurants);
		return res.json(restaurants);
	} catch (err) {
		return res.status(500).json({
			statusCode: res.statusCode,
			statusMessage: res.statusMessage,
			message: err
		});
	}
});

/**
 * @name Restaurant
 * @description Get restaurant by id
 */
router.get('/:id', async (req, res) => {
	try {
		// const restaurant = await Restaurant.findById({
		// 	_id: req.params.id
		// });

		const id = req.params.id;

		const restaurant = await Restaurant.aggregate([
			[
				{
					$match: {
						_id: new ObjectId(id)
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
		]);

		if (!restaurant) return res.json('Restaurant not found.');
		// console.log(restaurant);
		return res.json(restaurant);
	} catch (err) {
		res.status(500).json({
			statusCode: res.statusCode,
			statusMessage: res.statusMessage,
			message: err
		});
	}
});

/**
 * @name Delete Restaurant
 * @description Delete a restaurant
 */
router.delete('/:id', async (req, res) => {
	try {
		const restaurant = await Restaurant.deleteOne({
			_id: req.params.id
		});
		// console.log(restaurant);
		return res.json(restaurant);
	} catch (err) {
		res.status(500).json({
			statusCode: res.statusCode,
			statusMessage: res.statusMessage,
			message: err
		});
	}
});

/**
 * @name Update Restaurant
 * @description Update a restaurant
 */
router.put('/', async (req, res) => {
	try {
		const restaurant = await Restaurant.updateOne(
			{ _id: req.body._id },
			{
				$set: {
					name: req.body.name,
					description: req.body.description,
					lat: req.body.lat,
					long: req.body.long,
					address: req.body.address,
					rating: req.body.rating,
					categoryId: req.body.categoryId,
					image: req.body.image,
					dishes: req.body.dishes
				}
			}
		);
		// console.log(restaurant);
		return res.json(restaurant);
	} catch (err) {
		res.status(500).json({
			statusCode: res.statusCode,
			statusMessage: res.statusMessage,
			message: err
		});
	}
});

/**
 * @name Create Restaurant
 * @description Create a new restaurant
 */
router.post('/', async (req, res) => {
	try {
		const newRestaurant = new Restaurant({
			name: req.body.name,
			description: req.body.description,
			lat: req.body.lat,
			long: req.body.long,
			address: req.body.address,
			rating: req.body.rating,
			categoryId: req.body.categoryId,
			image: req.body.image,
			dishes: req.body.dishes
		});
		const restaurant = await newRestaurant.save();
		// console.log(restaurant);
		return res.json(restaurant);
	} catch (err) {
		return res.status(500).json({
			statusCode: res.statusCode,
			statusMessage: res.statusMessage,
			message: err
		});
	}
});

module.exports = router;
