import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import BasketComponent from './components/BasketComponent';
import DeliveryScreen from './components/DeliveryScreen';
import HomeComponent from './components/HomeComponent';
import RestaurantComponent from './components/RestaurantComponent';
import { addToBasket, cleanBasket } from './features/basketSlice';
import {
	cleanRestaurant,
	setRestaurant
} from './features/restaurantSlice';
import Layout from './layout/Layout';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		const sessionItems = JSON.parse(
			sessionStorage.getItem('basket-items')
		);
		const sessionRestaurant = JSON.parse(
			sessionStorage.getItem('restaurant')
		);

		if (sessionRestaurant) {
			dispatch(cleanRestaurant());
			dispatch(setRestaurant(sessionRestaurant));
		}

		if (sessionItems && sessionItems.length > 0) {
			dispatch(cleanBasket());
			sessionItems.map((item) => dispatch(addToBasket(item)));
		}
	}, [dispatch]);

	return (
		<Layout>
			<Routes>
				<Route path='/' element={<HomeComponent />}></Route>
				<Route
					path='/restaurant/:id'
					element={<RestaurantComponent />}></Route>
				<Route path='/basket' element={<BasketComponent />}></Route>
				<Route path='/delivery' element={<DeliveryScreen />}></Route>
			</Routes>
		</Layout>
	);
}

export default App;
