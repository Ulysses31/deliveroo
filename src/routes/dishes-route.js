const router = require('express').Router();
const Dish = require('../models/dishDto');

/**
 * @name Dishs
 * @description Get dishes list
 */
router.get('/', async (req, res) => {
	try {
		const dishes = await Dish.find();
		// console.log(dishes);
		return res.json(dishes);
	} catch (err) {
		return res.status(500).json({
			statusCode: res.statusCode,
			statusMessage: res.statusMessage,
			message: err
		});
	}
});

/**
 * @name Dish
 * @description Get dish by id
 */
router.get('/:id', async (req, res) => {
	try {
		const dish = await Dish.findById({
			_id: req.params.id
		});
		if (!dish) return res.json('Dish not found.');
		// console.log(dish);
		return res.json(dish);
	} catch (err) {
		res.status(500).json({
			statusCode: res.statusCode,
			statusMessage: res.statusMessage,
			message: err
		});
	}
});

/**
 * @name Delete Dish
 * @description Delete a dish
 */
router.delete('/:id', async (req, res) => {
	try {
		const dish = await Dish.deleteOne({
			_id: req.params.id
		});
		// console.log(dish);
		return res.json(dish);
	} catch (err) {
		res.status(500).json({
			statusCode: res.statusCode,
			statusMessage: res.statusMessage,
			message: err
		});
	}
});

/**
 * @name Update Dish
 * @description Update a dish
 */
router.put('/', async (req, res) => {
	try {
		const dish = await Dish.updateOne(
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
		// console.log(dish);
		return res.json(dish);
	} catch (err) {
		res.status(500).json({
			statusCode: res.statusCode,
			statusMessage: res.statusMessage,
			message: err
		});
	}
});

/**
 * @name Create Dish
 * @description Create a new dish
 */
router.post('/', async (req, res) => {
	try {
		const newDish = new Dish({
			name: req.body.name,
			description: req.body.description,
			price: req.body.price,
			image: req.body.image
		});
		const dish = await newDish.save();
		// console.log(dish);
		return res.json(dish);
	} catch (err) {
		return res.status(500).json({
			statusCode: res.statusCode,
			statusMessage: res.statusMessage,
			message: err
		});
	}
});

module.exports = router;
