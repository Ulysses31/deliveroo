import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cleanBasket } from '../features/basketSlice';
import {
	cleanRestaurant,
	selectRestaurant
} from '../features/restaurantSlice';

export default function DeliveryScreen() {
	const restaurant = useSelector(selectRestaurant);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(cleanRestaurant());
		dispatch(cleanBasket());
	}, [dispatch]);

	return (
		<>
			<div className='flex flex-col xs:w-1/2 font-sans mt-10 bg-zinc-50 m-auto shadow rounded'>
				<div className='flex flex-row justify-between p-6'>
					<div>
						<p className='text-lg text-gray-400'>Estimated Arrival</p>
						<p className='text-4xl font-bold text-gray-500'>
							45-55 Minutes
						</p>
					</div>
					<img
						src='https://links.papareact.com/wru'
						alt=''
						className='w-20 h-20'
					/>
				</div>
			</div>

			<div className='flex flex-col font-sans w-full xs:w-2/4 bg-zinc-50 m-auto shadow rounded mt-4'>
				<img
					src='./images/map.jpeg'
					alt='map'
					className='w-full h-full opacity-50 object-fill'
				/>
			</div>

			<div className='font-sans w-full xs:w-2/4 bg-zinc-50 m-auto shadow mt-5 rounded'>
				<div className='flex flex-row items-center space-x-5 h-28'>
					<img
						src='https://links.papareact.com/wru'
						alt='deliveroo'
						className='w-12 h-12 bg-gray-300 p-2 rounded-full ml-5'
					/>
					<div className='flex-1'>
						<p className='text-lg'>Iordanidis Chris</p>
						<p className='text-gray-400'>Your Rider</p>
					</div>
					<p className='text-[#00ccbb] text-lg pr-10 font-bold'>
						Call
					</p>
				</div>
			</div>
		</>
	);
}
