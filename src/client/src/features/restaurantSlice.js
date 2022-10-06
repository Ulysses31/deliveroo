import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	restaurant: {
		id: null,
		imgUrl: null,
		title: null,
		rating: null,
		genre: null,
		address: null,
		short_description: null,
		dishes: null
	}
};

export const restaurantSlice = createSlice({
	name: 'restaurant',
	initialState,
	reducers: {
		setRestaurant: (state, action) => {
			state.restaurant = action.payload;
			sessionInsert(state.restaurant);
		},
		cleanRestaurant: (state) => {
			state.restaurant = {};
			sessionInsert({});
		}
	}
});

// Action creators are generated for each case reducer function
export const { setRestaurant, cleanRestaurant } =
	restaurantSlice.actions;

// Selectors
export const selectRestaurant = (state) =>
	state.restaurant.restaurant;

// General
const sessionInsert = (restaurant) => {
	sessionStorage.setItem('restaurant', JSON.stringify(restaurant));
};

export default restaurantSlice.reducer;
