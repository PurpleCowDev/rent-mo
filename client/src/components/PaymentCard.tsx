import React from 'react';
import { BsFillCreditCard2FrontFill, BsPaypal, BsWalletFill } from 'react-icons/bs';

const PaymentCard = () => {
	return (
		<div className='flex sm:flex-row flex-col justify-evenly items-center gap-2 font-Messina-Sans text-sm w-full h-fit'>
			<a
				href='#card'
				className='sm:gap-0 gap-2 sm:w-48 w-full h-fit bg-dark300 rounded-lg shadow-md sm:pt-8 sm:py-0 py-2 sm:px-2 px-4 flex sm:flex-col flex-row items-center sm:justify-center justify-start text-center hover:scale-105 transition-all'
			>
				<BsFillCreditCard2FrontFill className='w-12 h-12' />
				<div className='w-fit h-12 flex sm:text-center text-start items-center'>
					<p>Credit or Debit Card</p>
				</div>
			</a>
			<a
				href='#e-wallet'
				className='sm:gap-0 gap-2 sm:w-48 w-full h-fit bg-dark300 rounded-lg shadow-md sm:pt-8 sm:py-0 py-2 sm:px-2 px-4 flex sm:flex-col flex-row items-center sm:justify-center justify-start text-center hover:scale-105 transition-all'
			>
				<BsWalletFill className='w-12 h-12' />
				<div className='w-fit h-12 flex text-center items-center'>
					<p>E-wallet</p>
				</div>
			</a>
			<a
				href='#paypal'
				className='sm:gap-0 gap-2 sm:w-48 w-full h-fit bg-dark300 rounded-lg shadow-md sm:pt-8 sm:py-0 py-2 sm:px-2 px-4 flex sm:flex-col flex-row items-center sm:justify-center justify-start text-center hover:scale-105 transition-all'
			>
				<BsPaypal className='w-12 h-12' />
				<div className='w-fit h-12 flex text-center items-center'>
					<p>Paypal</p>
				</div>
			</a>
		</div>
	);
};

export default PaymentCard;
