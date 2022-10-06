/* eslint-disable no-unused-vars */
/* eslint-disable node/no-unsupported-features/es-syntax */
// eslint-disable-next-line node/no-extraneous-import
import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { getCategories } from '../services/services';
import CategoryCard from './CategoryCard';

export default function Categories() {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		getCategories().then((data) => {
			setCategories(data);
		});
	}, []);

	return (
		<ScrollView
			horizontal
			showsHorizontalScrollIndicator={false}
			style={styles.contentContainerStyle}>
			{/* {CategoryCard} */}
			{categories.map((category) => {
				return (
					<CategoryCard
						key={category._id}
						imgUrl={category.image}
						title={category.name}
					/>
				);
			})}
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	contentContainerStyle: {
		paddingHorizontal: 15,
		paddingTop: 10
	}
});
