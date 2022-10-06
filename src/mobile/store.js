/* eslint-disable node/no-unsupported-features/es-syntax */
import { configureStore } from '@reduxjs/toolkit';
import basketReducer from './features/basketSlice';
import restaurantReducer from './features/restaurantSlice';

export const store = configureStore({
	reducer: {
		basket: basketReducer,
		restaurant: restaurantReducer
	}
});
