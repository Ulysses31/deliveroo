const router = require('express').Router();
const Category = require('../models/categoryDto');

/**
 * @name Categories
 * @description Get categories list
 */
router.get('/', async (req, res) => {
	try {
		const categories = await Category.find();
		// console.log(categories);
		return res.json(categories);
	} catch (err) {
		return res.status(500).json({
			statusCode: res.statusCode,
			statusMessage: res.statusMessage,
			message: err
		});
	}
});

/**
 * @name Category
 * @description Get category by id
 */
router.get('/:id', async (req, res) => {
	try {
		const category = await Category.findById({
			_id: req.params.id
		});
		if (!category) return res.json('Category not found.');
		// console.log(category);
		return res.json(category);
	} catch (err) {
		res.status(500).json({
			statusCode: res.statusCode,
			statusMessage: res.statusMessage,
			message: err
		});
	}
});

/**
 * @name Delete Category
 * @description Delete a category
 */
router.delete('/:id', async (req, res) => {
	try {
		const category = await Category.deleteOne({
			_id: req.params.id
		});
		// console.log(category);
		return res.json(category);
	} catch (err) {
		res.status(500).json({
			statusCode: res.statusCode,
			statusMessage: res.statusMessage,
			message: err
		});
	}
});

/**
 * @name Update Category
 * @description Update a category
 */
router.put('/', async (req, res) => {
	try {
		const category = await Category.updateOne(
			{ _id: req.body._id },
			{
				$set: {
					name: req.body.name,
					image: req.body.image
				}
			}
		);
		// console.log(category);
		return res.json(category);
	} catch (err) {
		res.status(500).json({
			statusCode: res.statusCode,
			statusMessage: res.statusMessage,
			message: err
		});
	}
});

/**
 * @name Create Category
 * @description Create a new category
 */
router.post('/', async (req, res) => {
	try {
		const newCategory = new Category({
			name: req.body.name,
			image: req.body.image
		});
		const category = await newCategory.save();
		// console.log(category);
		return res.json(category);
	} catch (err) {
		return res.status(500).json({
			statusCode: res.statusCode,
			statusMessage: res.statusMessage,
			message: err
		});
	}
});

module.exports = router;
