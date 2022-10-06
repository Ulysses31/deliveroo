/* eslint-disable no-unused-vars */
/* eslint-disable node/no-unsupported-features/es-syntax */
// eslint-disable-next-line node/no-extraneous-import
import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import RestaurantCard from './RestaurantCard';
import { getFeaturedById } from '../services/services';

export default function FeaturedRow({ id, title, description }) {
	const [restaurants, setRestaurants] = useState([]);

	useEffect(() => {
		getFeaturedById(id).then((data) => {
			console.log(data[0].restaurants);
			setRestaurants(data[0].restaurants);
		});
	}, [id]);

	return (
		<View>
			<View className='flex-row items-center justify-between mt-4 px-4'>
				<Text className='font-bold text-lg'>{title}</Text>
				<ArrowRightIcon color='#00ccbb' />
			</View>
			<Text className='text-xs text-gray-500 px-4'>
				{description}
			</Text>
			<ScrollView
				horizontal
				showsHorizontalScrollIndicator={false}
				style={styles.contentContainerStyle}
				className='pt-4'>
				{/* {Restaurant Cards} */}
				{restaurants.map((restaurant) => {
					return (
						<RestaurantCard
							key={restaurant._id}
							id={restaurant._id}
							imgUrl={restaurant.image}
							title={restaurant.name}
							rating={restaurant.rating}
							genre={restaurant.category[0].name}
							address={restaurant.address}
							description={restaurant.description}
							dishes={restaurant.dishes}
							long={restaurant.long}
							lat={restaurant.lat}
						/>
					);
				})}
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	contentContainerStyle: {
		paddingHorizontal: 15
	}
});
