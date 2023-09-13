import React from 'react';
import logo from '../assets/logo/RentMo-logo.svg';
import { FaFacebook, FaInstagram, FaLinkedinIn } from 'react-icons/fa6';

const Footer = () => {
	return (
		<div className='flex flex-col mx-auto h-fit w-full text-white bg-dark800 shadow-buttonbox font-Messina-Sans 2xl:px-36 px-10 py-10 items-center justify-center'>
			<div className='flex lg:flex-row flex-col items-center justify-between w-full h-fit pt-32 self-start'>
				<div className='flex flex-col sm:gap-4 gap-2 items-start justify-start lg:w-1/2 w-full'>
					<img src={logo} className=' w-44'></img>
					<p className='text-sm w-full lg:pr-10 pr-0'>
						RentMo is a vehicle-sharing marketplace that allows people to rent or share their vehicles with others. We
						provide a convenient and affordable way for people to access transportation without the hassle and
						complexities.
					</p>
					<div className='flex items-center gap-x-1'>
						<div className='cursor-pointer'>
							<a href='https://facebook.com' target='_blank'>
								<FaFacebook size={25} className='hover:scale-[110%] hover:fill-yellow transition-all' />
							</a>
						</div>
						<div className='transition-all flex cursor-pointer rounded-full bg-white overflow-hidden w-6 h-6 pb-[2.5px] items-end justify-center hover:scale-[110%] hover:bg-yellow'>
							<a href='https://instagram.com' target='_blank'>
								<FaInstagram size={18} className='fill-dark800 w-fit h-fit' />
							</a>
						</div>
						<div className='transition-all flex cursor-pointer rounded-full bg-white overflow-hidden w-6 h-6 pb-[2.5px] items-end justify-center hover:scale-[110%] hover:bg-yellow'>
							<a href='https://linkedin.com' target='_blank'>
								<FaLinkedinIn size={18} className='fill-dark800 self-center w-full h-full' />
							</a>
						</div>
					</div>
				</div>
				<div className='flex md:flex-row flex-col w-full justify-center lg:my-0 my-5'>
					<div className='flex flex-row justify-around w-full md:mb-0 mb-5'>
						<div className='flex flex-col sm:gap-4 gap-2 items-start justify-start'>
							<h1 className='font-bold text-base'>Quick Links</h1>
							<a
								href='#book'
								className='hover:text-yellow text-sm cursor-pointer leading-4 text-white transition-colors'
							>
								Book a car
							</a>
							<a
								href='/listing'
								className='hover:text-yellow text-sm cursor-pointer leading-4 text-white transition-colors'
							>
								Become a host
							</a>
							<a
								href='/how-it-works'
								className='hover:text-yellow text-sm cursor-pointer leading-4 text-white transition-colors'
							>
								How it works
							</a>
							<a
								href='/support'
								className='hover:text-yellow text-sm cursor-pointer leading-4 text-white transition-colors'
							>
								Support
							</a>
						</div>
						<div className='flex flex-col sm:gap-4 gap-2 items-start justify-start '>
							<h1 className='font-bold text-base'>4 Wheelers</h1>
							<a href='#' className='hover:text-yellow text-sm cursor-pointer leading-4 text-white transition-colors'>
								Trucks
							</a>
							<a href='#' className='hover:text-yellow text-sm cursor-pointer leading-4 text-white transition-colors'>
								Vans
							</a>
							<a href='#' className='hover:text-yellow text-sm cursor-pointer leading-4 text-white transition-colors'>
								Sports
							</a>
							<a href='#' className='hover:text-yellow text-sm cursor-pointer leading-4 text-white transition-colors'>
								Minivans
							</a>
							<a href='#' className='hover:text-yellow text-sm cursor-pointer leading-4 text-white transition-colors'>
								SUV
							</a>
							<a href='#' className='hover:text-yellow text-sm cursor-pointer leading-4 text-white transition-colors'>
								Electric Vehicles
							</a>
						</div>
					</div>
					<div className='flex flex-row justify-around w-full'>
						<div className='flex flex-col sm:gap-4 gap-2 items-start justify-start '>
							<h1 className='font-bold text-base'>2 Wheelers</h1>
							<a href='#' className='hover:text-yellow text-sm cursor-pointer leading-4 text-white transition-colors'>
								Scooter
							</a>
							<a href='#' className='hover:text-yellow text-sm cursor-pointer leading-4 text-white transition-colors'>
								Cruiser
							</a>
							<a href='#' className='hover:text-yellow text-sm cursor-pointer leading-4 text-white transition-colors'>
								Sport Bike
							</a>
							<a href='#' className='hover:text-yellow text-sm cursor-pointer leading-4 text-white transition-colors'>
								Touring
							</a>
							<a href='#' className='hover:text-yellow text-sm cursor-pointer leading-4 text-white transition-colors'>
								Café racer
							</a>
							<a href='#' className='hover:text-yellow text-sm cursor-pointer leading-4 text-white transition-colors'>
								Motocross
							</a>
						</div>
						<div className='flex flex-col sm:gap-4 gap-2 items-start justify-start '>
							<h1 className='font-bold text-base'>Top Cities</h1>
							<a href='#' className='hover:text-yellow text-sm cursor-pointer leading-4 text-white transition-colors'>
								Cebu
							</a>
							<a href='#' className='hover:text-yellow text-sm cursor-pointer leading-4 text-white transition-colors'>
								Makati
							</a>
							<a href='#' className='hover:text-yellow text-sm cursor-pointer leading-4 text-white transition-colors'>
								Davao
							</a>
							<a href='#' className='hover:text-yellow text-sm cursor-pointer leading-4 text-white transition-colors'>
								Bacolod
							</a>
							<a href='#' className='hover:text-yellow text-sm cursor-pointer leading-4 text-white transition-colors'>
								Iloilo
							</a>
							<a href='#' className='hover:text-yellow text-sm cursor-pointer leading-4 text-white transition-colors'>
								Cagayan de Oro
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className='flex sm:flex-row flex-col items-center justify-between w-full md:mt-8 mt-4 gap-4'>
				<div className='flex sm:flex-row flex-col w-full no-select sm:justify-start justify-center text-center'>
					<p className='text-base leading-4 text-white font-bold w-full sm:w-fit'>
						<span className=' font-normal'>2023</span>
						<span className=''></span> Rent
						<span className='text-yellow100 '>Mo</span>
					</p>
					<span className='border-l pl-2 ml-2'></span>
					<p className='text-base leading-4 text-white sm:w-fit w-full'>All rights reserved</p>
				</div>
				<div className='flex w-full sm:justify-end justify-center'>
					<a href='#privacy-policy' className='text-sm leading-4 text-white hover:text-yellow'>
						Privacy Policy
					</a>
					<span className='border-l pl-2 ml-2 text-white'></span>
					<a href='/terms-of-services' className='text-sm leading-4 text-white hover:text-yellow'>
						Terms of Use
					</a>
				</div>
			</div>
		</div>
	);
};

export default Footer;
