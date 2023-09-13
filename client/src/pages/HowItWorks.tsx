import React, { useRef, useEffect } from 'react';
import bg from '../assets/images/chocolate-hills.png';
import car from '../assets/units/toyota-car@2x.png';
import bg2 from '../assets/images/rice-terraces.png';
import car2 from '../assets/units/vios-car.png';
import booking from '../assets/sprites/booking.png';
import route from '../assets/sprites/map-location.png';
import calendar from '../assets/sprites/canceled.png';
import { ListingByLocation } from '../pages/ListingPage';

const HowItWorks = () => {
	return (
		<div id='how-it-works'>
			<div className='w-full min-h-fit items-center justify-center xl:p-20 p-10'>
				<div className='flex 2xl:flex-row flex-col justify-evenly items-start 2xl:gap-0 sm:gap-20 gap-16'>
					<div className='md:w-full self-center flex items-end justify-center 2xl:px-0 lg:px-60 md:px-40 px-0'>
						<img className='translate-x-[50%] w-[539px] h-fit' src={bg} alt='chocolate hills' />
						<img
							className='md:-translate-x-[46%] -translate-x-[45%] translate-y-[36%]  w-[650px] h-fit'
							src={car}
							alt='hilux'
						/>
					</div>
					<div className='w-full self-center flex flex-col gap-2 2xl:px-20 lg:px-40 md:px-20 px-0'>
						<h1 className='md:text-[40px] sm:text-2xl text-xl font-bold text-dark900 dark:text-white'>
							How RentMo Works
						</h1>
						<h2 className='md:text-xl text-base font-bold text-dark900 dark:text-white'>1. Sign Up and Apply</h2>
						<p className='mb-2 md:text-base text-sm'>
							All you need to do is fill up the necessary information, provide a valid driver's license, and be approved
							in a matter of minutes!
						</p>
						<h2 className='md:text-xl text-base font-bold text-dark900 dark:text-white'>2. Drive on Demand</h2>
						<p className='mb-2 md:text-base text-sm'>
							Once approved, you can fill ou the required fields for booking. Book a vehicle for a few hours, for the
							whole day, or for a whole month!
						</p>
						<h2 className='md:text-xl text-base font-bold text-dark900 dark:text-white'>
							3. Hop On The Driver's Seat and Cruise
						</h2>
						<p className='mb-2 md:text-base text-sm'>
							Whether you're picking up the car or need it delivered, all you need to do is coordinate with the host and
							you're good to go!
						</p>
						<a
							href='/support'
							className='px-6 py-4 font-bold text-md bg-yellow w-fit rounded-full shadow-md hover:scale-105 transition-transform'
						>
							Learn More
						</a>
					</div>
				</div>
			</div>
			<ListingByLocation />
			<div className='w-full min-h-fit items-center justify-center xl:p-20 p-10'>
				<div className='flex 2xl:flex-row-reverse flex-col justify-evenly items-start gap-20'>
					<div className='md:w-full self-center flex items-end justify-center 2xl:px-0 lg:px-60 md:px-40 px-0'>
						<img className='translate-x-[50%] w-[539px] h-fit' src={bg2} alt='terraces' />
						<img
							className='md:-translate-x-[60%] -translate-x-[50%] translate-y-[30%]  w-[650px] h-fit'
							src={car2}
							alt='vios'
						/>
					</div>
					<div className='w-full self-center flex flex-col gap-6 2xl:px-20 lg:px-40 md:px-20 px-0'>
						<h1 className='md:text-[40px] sm:text-2xl text-xl font-bold text-dark900 dark:text-white'>
							Why Choose RentMo?
						</h1>
						<div className='flex sm:flex-row flex-col gap-6 h-fit items-center'>
							<img className='w-20 h-20' src={booking} />
							<div>
								<h2 className='mb-1 md:text-xl text-base font-bold text-dark900 dark:text-white'>
									Seamless booking experience
								</h2>
								<p className='md:text-base text-sm'>
									5 From applying to booking your ride, the boking process is fast and simple. Easily sort out the
									transportation of your trip, all from your phone.
								</p>
							</div>
						</div>
						<div className='flex sm:flex-row flex-col gap-6 h-fit items-center'>
							<img className='w-20 h-20' src={route} />

							<div>
								<h2 className='mb-1 md:text-xl text-base font-bold text-dark900 dark:text-white'>
									Get your rides, wherever and whenever
								</h2>
								<p className='md:text-base text-sm'>
									Whenever your adventure takes you to the mountains, the beach, or the city. RentMo has got you
									covered. Find vehicles for each destination you're going to.
								</p>
							</div>
						</div>
						<div className='flex sm:flex-row flex-col gap-6 h-fit items-center'>
							<img className='w-20 h-20' src={calendar} />
							<div>
								<h2 className='mb-1 md:text-xl text-base font-bold text-dark900 dark:text-white'>
									Flexible cancellation
								</h2>
								<p className='md:text-base text-sm'>
									Need to cancel? You can cancel your booking up to 24 hours before the start of your trip without being
									charged any fees.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HowItWorks;
