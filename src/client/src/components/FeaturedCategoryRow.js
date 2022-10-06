import React, { useEffect, useState } from 'react';
import { getFeaturedById } from '../services/services';
import RestaurantCard from './RestaurantCard';

export default function FeaturedCategoryRow({
	id,
	title,
	description
}) {
	const [restaurants, setRestaurants] = useState([]);

	useEffect(() => {
		getFeaturedById(id).then((data) => {
			setRestaurants(data[0]?.restaurants);
		});
	}, [id]);

	// console.log(restaurants);

	return (
		<div className='bg-white rounded shadow mt-4 p-4'>
			<p className='font-bold text-2xl'>{title}</p>
			<p className='text-sm text-gray-500'>{description}</p>
			<div className='xs:overflow-x-auto'>
				<div className='flex flex-col xs:flex-row -mx-2 xs:w-max'>
					{restaurants?.map((restaurant) => (
						<RestaurantCard
							key={restaurant._id}
							id={restaurant._id}
							imgUrl={`/images/restaurants/${restaurant.image}`}
							title={restaurant.name}
							rating={restaurant.rating}
							genre={restaurant.category[0].name}
							address={restaurant.address}
							short_description={restaurant.short_description}
							dishes={restaurant.dishes}
							long={restaurant.long}
							lat={restaurant.lat}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
