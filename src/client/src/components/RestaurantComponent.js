import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaStar, FaMapMarkerAlt } from 'react-icons/fa';
import DishRow from './DishRow';
import BasketIcon from './BasketIcon';
import { useDispatch, useSelector } from 'react-redux';
import {
	selectRestaurant,
	setRestaurant
} from '../features/restaurantSlice';
import { getRestaurantById } from '../services/services';

export default function RestaurantComponent() {
	// const [restaurant, setRestaurant] = useState([]);
	const restaurant = useSelector(selectRestaurant);
	const dispatch = useDispatch();

	const { id } = useParams();

	// console.log(restaurant);

	useEffect(() => {
		getRestaurantById(id).then((result) => {
			const data = result[0];
			// console.log(data);
			dispatch(setRestaurant(data));
		});
	}, [id, dispatch]);

	return (
		<>
			<div className='flex flex-col font-sans w-full xs:w-2/4 bg-zinc-50 m-auto shadow mt-5 mb-4'>
				<form className='flex-auto p-6'>
					<div className='flex flex-wrap'>
						<h1 className='flex-auto text-lg font-semibold text-slate-900'>
							{restaurant.name}
						</h1>
						<div className='text-sm font-normal text-slate-400 cursor-pointer'>
							Have a food alergy?
						</div>
						<div className='w-full flex-none text-sm font-medium text-slate-700 mt-2'>
							{restaurant.description}
						</div>
					</div>
					<div className='flex items-baseline mt-4 mb-6'>
						<div className='items-center space-x-2 flex text-sm'>
							<FaStar color='gray' opacity={0.5} size={22} />
							<p className='text-green-500'>
								<span>{restaurant.rating}</span> -{' '}
								{restaurant.type?.name}
							</p>
							<FaMapMarkerAlt color='gray' opacity={0.5} size={22} />
							<p className='font-thin text-xs text-gray-500 xs:font-normal md:text-normal'>
								Nearby - {restaurant.address}
							</p>
						</div>
					</div>

					<p className='text-lg font-medium text-slate-500 border-b border-slate-200 mb-6'>
						Menu
					</p>

					<div className='mb-1 pb-1'>
						{restaurant.dishes?.map((dish) => (
							<DishRow
								key={dish._id}
								id={dish._id}
								name={dish.name}
								description={dish.description}
								price={dish.price}
								image={`/images/dishes/${dish.image}`}
							/>
						))}
					</div>

					{/* <div className="flex space-x-4 mb-6 text-sm font-medium border-t border-slate-200">
            <div className="flex-auto flex space-x-4">
              <button
                className="h-10 px-6 font-semibold rounded-md bg-black text-white"
                type="submit"
              >
                Buy now
              </button>
              <button
                className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900"
                type="button"
              >
                Add to bag
              </button>
            </div>
            <button
              className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200"
              type="button"
              aria-label="Like"
            >
              <svg
                width="20"
                height="20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                />
              </svg>
            </button>
          </div>
          <p className="text-sm text-slate-700">
            Free shipping on all continental US orders.
          </p> */}
				</form>
			</div>
			<BasketIcon />
		</>
	);
}
