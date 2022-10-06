import React from 'react';
import { FaStar, FaMapMarkerAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { cleanBasket } from '../features/basketSlice';

export default function RestaurantCard({
	id,
	imgUrl,
	title,
	rating,
	genre,
	address,
	short_description,
	dishes,
	long,
	lat
}) {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleRestaurantRedirect = (id) => {
		dispatch(cleanBasket());
		navigate(`./restaurant/${id}`);
	};

	return (
		<div
			className='bg-white my-4 mx-2 rounded shadow-lg cursor-pointer xs:w-56'
			onClick={() => handleRestaurantRedirect(id)}>
			<img
				src={imgUrl}
				alt={title}
				className='w-full h-44 xs:w-56 xs:h-36 rounded-sm'
			/>
			<div className='p-4'>
				<p className='text-sm font-bold xs:text-lg'>{title}</p>
				<p className='font-thin text-sm text-gray-400'>
					{short_description}
				</p>
			</div>
			<div className='flex flex-row items-center space-x-1 px-4 mb-1'>
				<FaStar color='gray' opacity={0.5} size={22} />
				<p className='font-thin text-xs text-gray-500 xs:font-normal md:text-normal'>
					<span>{rating}</span> - {genre}
				</p>
			</div>
			<div className='flex flex-row items-center space-x-1 px-4 mb-4'>
				<FaMapMarkerAlt color='gray' opacity={0.5} size={22} />
				<p className='font-thin text-xs text-gray-500 xs:font-normal md:text-normal'>
					Nearby - {address}
				</p>
			</div>
		</div>
	);
}
