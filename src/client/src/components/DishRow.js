import React, { useState } from 'react';
import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import {
	addToBasket,
	removeFromBasket,
	selectBasketItemsById,
	selectBasketItemTotalPrice
} from '../features/basketSlice';

export default function DishRow({
	id,
	name,
	description,
	price,
	image
}) {
	const [isPressed, setIsPressed] = useState(false);
	const dispatch = useDispatch();
	const items = useSelector((state) =>
		selectBasketItemsById(state, id)
	);
	const itemsTotalPrice = useSelector((state) =>
		selectBasketItemTotalPrice(state, id)
	);

	const handleAddItemToBasket = () => {
		dispatch(addToBasket({ id, name, description, price, image }));
	};

	const handleRemoveItemFromBasket = (id) => {
		dispatch(removeFromBasket({ id }));
	};

	return (
		<>
			<div className='bg-white shadow rounded mb-3 p-4'>
				<div
					className='flex flex-row items-start cursor-pointer'
					onClick={() => setIsPressed(!isPressed)}>
					<div className='flex-1 p-2'>
						<p className='xs:text-lg mb-1'>{name}</p>
						<p className='text-sm text-gray-400'>{description}</p>
						<p className='text-gray-500 mt-2'>{price} €</p>
					</div>
					<img
						src={image}
						alt={name}
						className='w-32 h-24 bg-gray-100 p-2 rounded'
					/>
				</div>

				{isPressed && (
					<div className='flex flex-row items-center space-x-2 mt-3 '>
						<p>
							<FaMinusCircle
								size={22}
								className='cursor-pointer'
								color='#00ccbb'
								onClick={() => handleRemoveItemFromBasket(id)}
							/>
						</p>
						<p>{items.length}</p>
						<p>
							<FaPlusCircle
								size={22}
								className='cursor-pointer'
								color='#00ccbb'
								onClick={() => handleAddItemToBasket()}
							/>
						</p>
						<p className='text-sm text-gray-400'>
							Total: {parseFloat(itemsTotalPrice).toFixed(2)} €
						</p>
					</div>
				)}
			</div>
		</>
	);
}
