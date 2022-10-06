import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import {
	selectBasketItems,
	selectBasketTotalPrice
} from '../features/basketSlice';

export default function BasketIcon() {
	const navigate = useNavigate();
	const location = useLocation();
	const items = useSelector((state) => selectBasketItems(state));
	const totalPrice = useSelector((state) =>
		selectBasketTotalPrice(state)
	);

	if (items.length === 0) return null;

	return (
		<div
			className='bg-gray-50 m-auto xs:w-1/2 mb-4 p-4 shadow'
			onClick={() =>
				navigate(`/basket?backUrl=${location.pathname}`)
			}>
			<div className='flex flex-row items-center justify-between'>
				<p className='text-white font-extrabold text-lg py-1 px-2 bg-[#01a296]'>
					{items.length}
				</p>
				<p className='flex-1 text-gray-400 font-extrabold text-lg text-center cursor-pointer'>
					View Basket
				</p>
				<p className='text-lg text-gray-400 font-extrabold'>
					{parseFloat(totalPrice).toFixed(2)} €
				</p>
			</div>
		</div>
	);
}
