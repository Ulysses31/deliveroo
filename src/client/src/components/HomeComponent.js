import React, { useEffect, useState } from 'react';
import Footer from '../layout/Footer';
import { getFeatured } from '../services/services';
import CategoryComponent from './CategoryComponent';
import FeaturedCategoryRow from './FeaturedCategoryRow';
import TrackOrdersJumbo from './TrackOrdersJumbo';

export default function HomeComponent() {
	const [featuredCategories, setFeaturedCategories] = useState([]);

	useEffect(() => {
		getFeatured().then((data) => setFeaturedCategories(data));
	}, []);

	// console.log(featuredCategories);

	return (
		<div className='m-4'>
			{/* categories */}
			<CategoryComponent />

			{/* featured categories */}
			{featuredCategories.map((category) => (
				<FeaturedCategoryRow
					key={category._id}
					id={category._id}
					title={category.name}
					description={category.description}
				/>
			))}

			{/* jumbotron track orders */}
			<TrackOrdersJumbo />

			{/* footer */}
			<Footer />
		</div>
	);
}
