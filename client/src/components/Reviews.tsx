import React from 'react';
import { Rating } from '@material-tailwind/react';
import avatar from '../assets/logo/avatar-logo.png';

const Reviews = () => {
	const reviewName = 'Jhury Lastre';
	const reviewDate = '2021-09-01';
	const reviewRating = 4;
	const reviewComment =
		'Lorem ipsum dolor sit amet, consectetur  consectetur  consectetur  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea';

	return (
		<div className='flex flex-col w-full'>
			<h1 className='text-lg font-bold text-dark900 w-full'>Reviews</h1>
			<div className='flex flex-row w-full h-fit gap-5 mt-5'>
				<div className=' self-start overflow-hidden flex justify-center w-20 rounded-full shadow-xl'>
					<img className='object-cover select-none w-20' src={avatar} alt='logo' />
				</div>
				<div className='flex flex-col gap-1 w-full h-full text-dark900'>
					<Rating ratedColor='amber' value={reviewRating} readonly />
					<p className='font-semibold text-base'>{reviewName}</p>
					<p className='text-xs text-dark700'>{reviewDate}</p>
					<p className='text-sm text-justify'>{reviewComment}</p>
				</div>
			</div>
		</div>
	);
};

export default Reviews;
