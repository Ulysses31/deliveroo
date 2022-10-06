import React from 'react';

export default function TrackOrdersJumbo() {
	return (
		<div className='flex flex-col xs:flex-row bg-white rounded shadow mt-4 xs:h-80'>
			<div className='flex-1 flex-col p-6 xl:p-10'>
				<p className='text-lg xs:text-4xl font-bold'>
					Track orders to your door
				</p>
				<p className='text-sm xs:text-lg font-normal text-gray-400 mt-5'>
					Get your favourite food delivered in a flash. You’ll see
					when your rider’s picked up your order, and be able to
					follow them along the way. You’ll get a notification when
					they’re nearby, too.
				</p>
			</div>
			<div className='flex-1 overflow-hidden'>
				<img
					src='./images/map.jpeg'
					alt='map'
					className='w-full h-full opacity-50 object-cover'
				/>
			</div>
		</div>
	);
}
