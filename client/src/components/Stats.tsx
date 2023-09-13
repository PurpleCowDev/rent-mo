import React from 'react';
import { Progress } from '@material-tailwind/react';
import { BsFillStarFill } from 'react-icons/bs';

export default function Stats() {
	const ratingNumber = 17;
	const cleanliness = 80;
	const maintenance = 75;
	const functionality = 60;
	const convenience = 90;
	const communication = 70;
	const totalRating = (cleanliness + maintenance + functionality + convenience + communication) / 5;
	return (
		<div className='flex flex-col items-start justify-between w-full h-fit gap-4'>
			<div className='flex flex-col gap-0'>
				<h1 className='text-lg font-bold'>Ratings</h1>
				<h1 className='text-lg font-bold flex items-center gap-2'>
					{0.05 * totalRating}{' '}
					<span>
						<BsFillStarFill />
					</span>
				</h1>
				<p className='text-sm'>({ratingNumber} Ratings)</p>
			</div>
			<div className='flex flex-col gap-0 w-full sm:text-base text-sm'>
				<div className='flex flex-row w-full items-center justify-center'>
					<p className='w-56'>Cleanliness</p>
					<Progress value={cleanliness} variant='filled' size='sm' color='amber' />
					<p className='w-16 text-end'>{0.05 * cleanliness}</p>
				</div>
				<div className='flex flex-row w-full items-center justify-center'>
					<p className='w-56'>Maintenance</p>
					<Progress value={maintenance} variant='filled' size='sm' color='amber' />
					<p className='w-16 text-end'>{0.05 * maintenance}</p>
				</div>
				<div className='flex flex-row w-full items-center justify-center'>
					<p className='w-56'>Functionality</p>
					<Progress value={functionality} variant='filled' size='sm' color='amber' />
					<p className='w-16 text-end'>{0.05 * functionality}</p>
				</div>
				<div className='flex flex-row w-full items-center justify-center'>
					<p className='w-56'>Convenience</p>
					<Progress value={convenience} variant='filled' size='sm' color='amber' />
					<p className='w-16 text-end'>{0.05 * convenience}</p>
				</div>
				<div className='flex flex-row w-full items-center justify-center'>
					<p className='w-56'>Communication</p>
					<Progress value={communication} variant='filled' size='sm' color='amber' />
					<p className='w-16 text-end'>{0.05 * communication}</p>
				</div>
			</div>
		</div>
	);
}
