import React from 'react';
import ride from '../assets/images/book-a-ride.png';
import find_car from '../assets/sprites/car-check.png';

const BookCard = () => {
	return (
		<div className='relative inset-0 bg-yellow rounded-2xl flex items-start justify-center w-fit h-full'>
			<img className='transition-opacity rounded-2xl items-center opacity-20' src={ride} width='600' alt='Host' />
			<div className='absolute flex flex-col items-center justify-evenly w-full h-full px-20 font-Messina-Sans'>
				<img src={find_car} width='80' />
				<p className='text-black text-md text-center w-80 sm:block hidden'>
					Sign up today and start booking! Travel like a boss with RentMo.
				</p>
				<a
					href='/register'
					className='px-6 py-2 font-bold bg-dark800 rounded-full shadow-md hover:scale-105 transition-transform text-white'
				>
					Book a ride
				</a>
			</div>
		</div>
	);
};

export default BookCard;
