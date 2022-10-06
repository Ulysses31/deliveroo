const serverUrl = 'http://192.168.1.4:5000';

/* eslint-disable node/no-unsupported-features/es-syntax */
export const getCategories = async () => {
	const res = await fetch(`${serverUrl}/categories`);
	return res.json();
	// .then((result) => console.log(result));
};

export const getFeatured = async () => {
	const res = await fetch(`${serverUrl}/featured-categories`);
	return res.json();
	// .then((result) => console.log(result));
};

export const getFeaturedById = async (id) => {
	const res = await fetch(`${serverUrl}/featured-categories/${id}`);
	return res.json();
	// .then((result) => console.log(result));
};

export const getRestaurantById = async (id) => {
	const res = await fetch(`${serverUrl}/restaurants/${id}`);
	return res.json();
	// .then((result) => console.log(result));
};

export const insertTrasaction = async (data) => {
	console.log(data);
	const res = await fetch(`${serverUrl}/transactions`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	});
	return res.json();
	// .then((result) => console.log(result));
};
