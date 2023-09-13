import React from 'react';
import host from '../assets/images/become-host-bg.png';
import book_car from '../assets/sprites/car-rental.png';

const HostCard = () => {
	return (
		<div className='relative bg-black rounded-2xl flex items-center justify-center'>
			<img className='transition-opacity rounded-2xl items-center opacity-40' src={host} width='600' alt='Host' />
			<div className='absolute flex flex-col items-center justify-evenly w-full h-full px-20 font-Messina-Sans'>
				<img src={book_car} width='80' />
				<p className='text-white text-md w-full text-center sm:block hidden'>
					Want to make some extra money on the side? Be a part of the car-sharing marketplace on RentMo. List your
					vehicle and become a host today!
				</p>
				<a
					href='/listing'
					className='px-4 py-2 font-bold bg-yellow rounded-full shadow-md hover:scale-105 transition-transform'
				>
					Become a host
				</a>
			</div>
		</div>
	);
};

export default HostCard;
