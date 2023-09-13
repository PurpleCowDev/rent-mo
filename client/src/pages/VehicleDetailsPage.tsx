import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useUser } from '../../hooks/zustand/useUser';
import Navbar from '../components/Navbar';
import '../index.css';
import { Carousel } from 'react-responsive-carousel';
import { ICar } from '../../types/types';
import { initialInfoState } from '../../types/initialInfo';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import avatar from '../assets/logo/avatar-logo.png';
import Stats from '../components/Stats';
import Reviews from '../components/Reviews';
import { ButtonFill } from '../components/Buttons';
import { BsFillStarFill, BsFillAwardFill, BsTelephoneFill, BsFillPinMapFill } from 'react-icons/bs';
import axios from 'axios';

const VehicleDetailsPage = () => {
	const { id } = useParams<{ id: string }>();
	const [vehicleInfo, setVehicleInfo] = useState<ICar>(initialInfoState);
	const store = useUser();
	const { user = {} }: any = store?.user || {};

	const description = `4-door, 5 seaters, AWD vehicle that will keep you safe and is gas friendly.  Economical and clean.  Great handling with all features including keyless entry, heated seats, Bluetooth, and a nice sunroof for those adventurous drives.`;
	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		try {
			const response = await axios.get(`/api/v1/host/listing/${id}`);
			setVehicleInfo(response.data.listing);
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	};

	const imageFile = [
		'https://images.prismic.io/barnebys/105985ac-c96c-458d-9011-acc988b2f098_1.jpeg?w=900&auto=format%2Ccompress&cs=tinysrgb',
		'https://qph.cf2.quoracdn.net/main-qimg-7458d545cfd0a575972283f52f913ecd-lq',
		'https://cdn.shopify.com/s/files/1/0035/9877/8435/files/Rosso_Corsa_Ferrari_F8_Spider_2048x2048.jpg?v=1591100127',
		'https://wallpaperaccess.com/full/1470367.jpg',
	];

	return (
		<>
			<div className='flex flex-col w-full h-fit pb-20 bg-cover bg-no-repeat font-Messina-Sans'>
				<Navbar />
				<div className='absolute w-full h-72 bg-gradient-to-br from-dark700 to-dark900 -z-10 '></div>
				<div className='md:w-4/5 w-full h-full flex items-center justify-evenly self-center shadow-searchbox'>
					<Carousel
						showStatus={false}
						showThumbs={false}
						infiniteLoop={false}
						swipeable={true}
						emulateTouch={true}
						showArrows={true}
						centerMode={true}
						centerSlidePercentage={100}
						className='carousel-container h-full w-full'
					>
						{vehicleInfo.vehiclePhotos.map((image, index) => (
							<div key={index} className='carousel-slide relative hover:scale-[1.02] transition'>
								<img
									src={image as string}
									alt={`Image ${index}`}
									className='mx-auto h-[470px] object-cover select-none'
								/>
							</div>
						))}
					</Carousel>
				</div>
				<div className='flex lg:flex-row flex-col h-fit xl:px-80 md:px-40 sm:px-8 px-4 mt-10 justify-center sm:gap-20 gap-10'>
					<div className='flex flex-col items-start justify-between w-full h-full gap-6'>
						<div className='w-full flex flex-col'>
							<h1 className='text-4xl font-bold'>
								{vehicleInfo?.brand} {vehicleInfo?.model}
							</h1>
							<div className='text-base w-full flex flex-col sm:flex-row gap-4 mt-2'>
								<div className='flex gap-2 items-center justify-start'>
									<BsFillStarFill />
									<p>{'Rating'}</p>
								</div>
								<div className='flex gap-2 items-center justify-start'>
									<BsFillPinMapFill />
									<p>{vehicleInfo.city + ', ' + vehicleInfo.country}</p>
								</div>
								<div className='flex gap-2 items-center justify-start'>
									<BsTelephoneFill />
									<p>{vehicleInfo.mobileNumber}</p>
								</div>
							</div>
						</div>
						<div className='flex flex-col gap-2  justify-center w-full'>
							<h1 className='text-lg font-bold'>Hosted by</h1>
							<div className='flex sm:flex-row flex-col gap-8 items-center'>
								<img className='h-32' src={avatar}></img>
								<div className='sm:text-start text-center'>
									<h1 className='text-lg font-bold'>{user.firstName + ' ' + user.lastName}</h1>
									<p className='text-base'>{user.email}</p>
									<p className='flex items-center gap-2'>
										<span>
											<BsFillAwardFill />
										</span>
										{'Frequently Booked'}
									</p>
									<p>{'1000' + ' ' + 'Total Trips'}</p>
									<p>{'Member since ' + user.createdAt.split('-')[0]}</p>
								</div>
							</div>
						</div>
						<div className='flex flex-col gap-2'>
							<h1 className='text-lg font-bold'>Description</h1>
							<p className=''>{description}</p>
						</div>
					</div>
					<div className='flex flex-col items-start justify-center w-full h-full gap-6'>
						<h1 className='font-normal text-lg pl-4 border-b border-dark600 w-full'>
							{'Php ' + vehicleInfo.price + '/day'}
						</h1>
						<div className='w-full flex flex-col items-center justify-center gap-2 px-4'>
							<div className='flex sm:flex-row flex-col justify-center sm:gap-6 gap-2 sm:items-center md:w-fit pb-1 border-b border-dark500'>
								<label htmlFor='input-start-trip' className='text-yellow100 md:text-base text-sm pr-5'>
									From
								</label>
								<div className='flex flex-row w-full gap-4'>
									<input
										id='input-start-trip'
										type='date'
										className='text-dark900 bg-transparent focus:outline-none md:text-base text-sm'
									/>
									<input
										id='input-start-trip-time'
										type='time'
										className='text-dark900 bg-transparent focus:outline-none md:text-base text-sm'
									/>
								</div>
							</div>
							<div className='flex sm:flex-row flex-col justify-center sm:gap-6 gap-2 sm:items-center w-fit pb-1 border-b border-dark500'>
								<label htmlFor='input-end-trip' className='text-yellow100 md:text-base text-sm pr-10'>
									To
								</label>
								<div className='flex flex-row w-full gap-4'>
									<input
										id='input-end-trip'
										type='date'
										className='text-dark900 bg-transparent focus:outline-none md:text-base text-sm'
									/>
									<input
										id='input-end-trip-time'
										type='time'
										className='text-dark900 bg-transparent focus:outline-none md:text-base text-sm'
									/>
								</div>
							</div>
							<div className='flex sm:flex-row flex-col sm:gap-8 gap-2 justify-center sm:items-center md:w-[346px] sm:w-[318px] w-[238px] pb-1 border-b border-dark500'>
								<label htmlFor='locationPickup' className='text-yellow100 md:text-base text-sm w-fit '>
									Pick&#8209;up
								</label>
								<div className='flex w-full'>
									<div className='flex border-none transition-colors w-full'>
										<input
											id='locationPickup'
											type='search'
											placeholder='Pick-up Location'
											className='text-dark900 bg-transparent w-full focus:outline-none md:text-base text-sm'
										/>
									</div>
								</div>
							</div>
							<div className='flex sm:flex-row flex-col sm:gap-6 gap-2 justify-center sm:items-center md:w-[346px] sm:w-[318px] w-[238px] pb-1 border-b border-dark500'>
								<label htmlFor='locationDropOff' className='text-yellow100 md:text-base text-sm w-fit '>
									Drop&#8209;off
								</label>
								<div className='flex w-full'>
									<div className='flex border-none transition-colors w-full'>
										<input
											id='locationDropOff'
											type='search'
											placeholder='Drop-off Location'
											className='text-dark900 bg-transparent w-full focus:outline-none md:text-base text-sm'
										/>
									</div>
								</div>
							</div>
							<div className='md:w-[346px] w-[318px] mt-4'>
								<ButtonFill text='Book Now' />
							</div>
						</div>
					</div>
				</div>
				<div className='flex lg:flex-row flex-col h-fit w-full xl:px-80 md:px-40 sm:px-8 px-4 mt-6 justify-center sm:gap-20 gap-10'>
					<Stats />
					<Reviews />
				</div>
			</div>
		</>
	);
};

export default VehicleDetailsPage;
