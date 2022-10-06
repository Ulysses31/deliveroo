import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { selectBasketItems } from '../features/basketSlice';

export default function MainNavigation() {
	const navigate = useNavigate();
	const location = useLocation().pathname;
	const items = useSelector((state) => selectBasketItems(state));

	return (
		<nav className='bg-white shadow'>
			<div className='mx-auto w-full px-4 sm:px-6 lg:px-8'>
				<div className='flex h-16 items-center'>
					<div className='flex items-center flex-grow'>
						<div className=''>
							<img
								className='h-8 w-8'
								src='https://links.papareact.com/wru'
								alt='Workflow'
							/>
						</div>
						<div className='md:block flex-1'>
							<div className='ml-10 flex items-baseline space-x-4'>
								<Link
									to={'/'}
									aria-current='page'
									className={`${
										location === '/' ? 'bg-gray-300' : ''
									} hover:bg-gray-300 p-2 rounded`}>
									Home
								</Link>
							</div>
						</div>
						<div
							className='flex items-center space-x-2 mr-4 cursor-pointer'
							onClick={() => navigate(`/basket?backUrl=${location}`)}>
							<FaShoppingCart size={22} opacity={0.8} color='gray' />
							<p className='bg-gray-300 text-white font-bold rounded-full px-2 pt-0.5'>
								{items.length}
							</p>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}
