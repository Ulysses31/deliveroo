import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
	return (
		<footer className='bg-gray-700 p-5 mt-5'>
			<div className='grid grid-flow-dense auto-cols-auto grid-cols-2 xs:grid-cols-4 gap-7 text-white'>
				<div className='p-4 bg-gray-600 rounded'>
					<p className='text-xl font-normal mb-2'>
						Discover Deliveroo
					</p>
					<ul className='text-sm'>
						<li className='mt-1 mb-1 cursor-pointer'>Investors</li>
						<li className='mt-1 mb-1 cursor-pointer'>About us</li>
						<li className='mt-1 mb-1 cursor-pointer'>Takeaway</li>
						<li className='mt-1 mb-1 cursor-pointer'>More</li>
						<li className='mt-1 mb-1 cursor-pointer'>Newsroom</li>
						<li className='mt-1 mb-1 cursor-pointer'>
							Engineering blog
						</li>
						<li className='mt-1 mb-1 cursor-pointer'>Design blog</li>
						<li className='mt-1 mb-1 cursor-pointer'>Gift Cards</li>
						<li className='mt-1 mb-1 cursor-pointer'>Careers</li>
						<li className='mt-1 mb-1 cursor-pointer'>
							Restaurant signup
						</li>
						<li className='mt-1 mb-1 cursor-pointer'>
							Become a rider
						</li>
					</ul>
				</div>
				<div className='p-4 bg-gray-600 rounded'>
					<p className='text-xl font-normal mb-2'>Legal</p>
					<ul className='text-sm'>
						<li className='mt-1 mb-1 cursor-pointer'>
							Terms and conditions
						</li>
						<li className='mt-1 mb-1 cursor-pointer'>Privacy</li>
						<li className='mt-1 mb-1 cursor-pointer'>Cookies</li>
						<li className='mt-1 mb-1 cursor-pointer'>
							Modern Slavery Statement
						</li>
						<li className='mt-1 mb-1 cursor-pointer'>Tax Strategy</li>
						<li className='mt-1 mb-1 cursor-pointer'>
							Section 172 Statement
						</li>
					</ul>
				</div>
				<div className='p-4 bg-gray-600 rounded'>
					<p className='text-xl font-normal mb-2'>Help</p>
					<ul className='text-sm'>
						<li className='mt-1 mb-1 cursor-pointer'>Contact</li>
						<li className='mt-1 mb-1 cursor-pointer'>FAQs</li>
						<li className='mt-1 mb-1 cursor-pointer'>Cuisines</li>
						<li className='mt-1 mb-1 cursor-pointer'>Brands</li>
					</ul>
				</div>
				<div className='p-4 bg-gray-600 rounded'>
					<p className='text-xl font-normal mb-2'>Deliveroo App</p>
					<ul>
						<li className='mb-3'>
							<img
								src='./images/appstore.png'
								alt='appstore'
								className='w-32 cursor-pointer rounded'
							/>
						</li>
						<li className='mb-3'>
							<img
								src='./images/googleplay.png'
								alt='googleplay'
								className='w-32 h-10 cursor-pointer rounded'
							/>
						</li>
					</ul>
				</div>
			</div>

			{/* social */}
			<div className='flex flex-row space-x-4 justify-center xs:justify-start mt-4 pt-4 pb-4'>
				<FaFacebookF
					size={24}
					opacity='0.7'
					color='white'
					className='cursor-pointer'
				/>
				<FaTwitter
					size={24}
					opacity='0.7'
					color='white'
					className='cursor-pointer'
				/>
				<FaInstagram
					size={24}
					opacity='0.7'
					color='white'
					className='cursor-pointer'
				/>
			</div>
		</footer>
	);
}
