import React, { useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	removeFromBasket,
	selectBasketItems,
	selectBasketTotalPrice
} from '../features/basketSlice';
import { selectRestaurant } from '../features/restaurantSlice';
import { FaArrowCircleLeft, FaShoppingCart } from 'react-icons/fa';
import { useNavigate, useSearchParams } from 'react-router-dom';
import PlaceOrderModal from './PlaceOrderModal';
import { insertTrasaction } from '../services/services';

export default function BasketComponent() {
	const [groupedItemsInBasket, setGroupedItemsInBasket] = useState(
		[]
	);
	const restaurant = useSelector(selectRestaurant);
	const items = useSelector(selectBasketItems);
	const basketTotal = useSelector(selectBasketTotalPrice);
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	const backUrl = searchParams.get('backUrl');
	const dispatch = useDispatch();

	const [open, setOpen] = useState(false);

	const saveTransaction = () => {
		const basketItems = Object.entries(groupedItemsInBasket).map(
			([key, items]) => {
				return {
					name: items[0].name,
					quantity: items.length,
					total: parseFloat(items.length * items[0]?.price).toFixed(2)
				};
			}
		);

		const transactionData = {
			restaurant: restaurant.name,
			items: basketItems,
			subtotal: basketTotal,
			deliveryFee: '10.0',
			total: basketTotal + 10.0
		};

		insertTrasaction(transactionData).then((data) =>
			openPlaceOrderModal()
		);
	};

	const openPlaceOrderModal = () => {
		setOpen(true);
	};

	const closePlaceOrderModal = () => {
		setOpen(false);
	};

	useMemo(() => {
		const groupedItems = items.reduce((results, item) => {
			(results[item.id] = results[item.id] || []).push(item);
			return results;
		}, {});

		setGroupedItemsInBasket(groupedItems);
	}, [items]);

	return (
		<>
			<PlaceOrderModal
				isOpen={open}
				handleClose={closePlaceOrderModal}
			/>
			<div className='flex flex-col font-sans w-full xs:w-2/4 bg-zinc-50 m-auto shadow p-4 mt-5 rounded'>
				<div className='flex flex-wrap relative'>
					<FaArrowCircleLeft
						size={24}
						opacity={0.4}
						className='absolute right-1 top-1 cursor-pointer'
						onClick={() => navigate(backUrl)}
					/>
					<h1 className='flex-auto text-lg font-semibold text-slate-900'>
						<FaShoppingCart
							size={24}
							color='text-[#00ccbb]'
							className='mb-4'
						/>
						{restaurant.name}
					</h1>
					<div className='w-full flex-none text-sm font-normal text-slate-400 mt-2'>
						{restaurant.description}
					</div>

					{basketTotal === 0 && (
						<p className='w-full text-center mt-5 text-lg font-medium text-gray-400'>
							No Items In Basket
						</p>
					)}

					{basketTotal > 0 && (
						<div className='flex flex-row justify-around items-center w-full mt-5 mb-10 p-4 rounded shadow bg-white'>
							<img
								className='h-8 w-8'
								src='https://links.papareact.com/wru'
								alt='Workflow'
							/>
							<p className='text-lg font-normal text-gray-500'>
								Deliver in 50-75 min
							</p>
							<p className='font-normal text-gray-400 cursor-pointer'>
								Change
							</p>
						</div>
					)}
				</div>

				{Object.entries(groupedItemsInBasket).map(([key, items]) => (
					<div
						key={key}
						className='flex flex-row space-x-3 items-center w-full mb-2 p-3 rounded shadow bg-white'>
						<p className='text-[#00ccbb]'>{items.length} x</p>
						<img
							src={items[0]?.image}
							alt={items[0]?.name}
							className='w-16 h-16 rounded-full bg-gray-200 p-1'
						/>
						<p className='flex-1'>{items[0]?.name}</p>
						<p className='pr-2'>
							{parseFloat(items.length * items[0]?.price).toFixed(2)}{' '}
							€
						</p>
						<p
							className='font-normal text-gray-400 cursor-pointer'
							onClick={() => dispatch(removeFromBasket({ id: key }))}>
							Remove
						</p>
					</div>
				))}

				{basketTotal > 0 && (
					<div className='mt-6 bg-white p-4 rounded shadow'>
						<div className='flex flex-row justify-between'>
							<p>Subtotal:</p>
							<p className='text-gray-400'>
								{parseFloat(basketTotal).toFixed(2)} €
							</p>
						</div>
						<div className='flex flex-row justify-between'>
							<p>Delivery Fee:</p>
							<p className='text-gray-400'>
								{parseFloat(10.0).toFixed(2)} €
							</p>
						</div>
						<div className='flex flex-row justify-between'>
							<p className='font-bold'>Order Total:</p>
							<p className='font-bold'>
								{parseFloat(basketTotal + 10.0).toFixed(2)} €
							</p>
						</div>
						<div
							onClick={() => saveTransaction()}
							className='bg-slate-400 m-2 mt-4 p-3 text-gray-100 font-medium text-lg text-center cursor-pointer rounded shadow'>
							Place Order
						</div>
					</div>
				)}
			</div>
		</>
	);
}
