import React, { Fragment, useEffect, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { FaSpinner } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function PlaceOrderModal({ isOpen, handleClose }) {
	const navigate = useNavigate();
	const [open, setOpen] = useState(false);
	const cancelButtonRef = useRef(null);

	// const closePlaceOrderModal = () => {
	//   handleClose();
	//   setOpen(false);
	// };

	useEffect(() => {
		setOpen(isOpen);

		if (open === true) {
			setTimeout(() => {
				handleClose();
				setOpen(false);
				navigate('/delivery');
			}, 6000);
		}
	}, [open, isOpen, handleClose, navigate]);

	return (
		<Transition.Root show={open} as={Fragment}>
			<Dialog
				as='div'
				className='relative z-10'
				initialFocus={cancelButtonRef}
				onClose={setOpen}>
				<Transition.Child
					as={Fragment}
					enter='ease-out duration-300'
					enterFrom='opacity-0'
					enterTo='opacity-100'
					leave='ease-in duration-200'
					leaveFrom='opacity-100'
					leaveTo='opacity-0'>
					<div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
				</Transition.Child>

				<div className='fixed inset-0 z-10 overflow-y-auto'>
					<div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
						<Transition.Child
							as={Fragment}
							enter='ease-out duration-300'
							enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
							enterTo='opacity-100 translate-y-0 sm:scale-100'
							leave='ease-in duration-200'
							leaveFrom='opacity-100 translate-y-0 sm:scale-100'
							leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'>
							<Dialog.Panel className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg'>
								<div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
									<div className='flex flex-col items-center'>
										<img
											src='./images/order-loading.gif'
											alt='order-loading'
											className='w-4/5'
										/>
										<p className='text-lg font-normal text-gray-500'>
											Waiting for Restaurant to accept your order!
										</p>
										<FaSpinner
											size={44}
											opacity='0.6'
											color='gray'
											className='animate-spin mt-10 mb-10'
										/>
									</div>
								</div>
								{/* <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => closePlaceOrderModal()}
                  >
                    Deactivate
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => closePlaceOrderModal()}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div> */}
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	);
}