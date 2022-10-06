export const getCategories = async () => {
	const res = await fetch('/categories');
	return res.json();
	// .then((result) => console.log(result));
};

export const getFeatured = async () => {
	const res = await fetch('/featured-categories');
	return res.json();
	//.then((result) => console.log(result));
};

export const getFeaturedById = async (id) => {
	const res = await fetch(`/featured-categories/${id}`);
	return res.json();
	// .then((result) => console.log(result));
};

export const getRestaurantById = async (id) => {
	const res = await fetch(`/restaurants/${id}`);
	return res.json();
	// .then((result) => console.log(result));
};

export const insertTrasaction = async (data) => {
	console.log(data);
	const res = await fetch('/transactions', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	});
	return res.json();
	// .then((result) => console.log(result));
};
