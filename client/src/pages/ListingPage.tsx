import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CardContent, Card, Pagination } from '@mui/material';
import { ICar } from 'types/types';
import imageUnavailable from '../assets/logo/image_not_available.png';
import { ButtonFillRoundedFull } from '../components/Buttons';
import { useNavigate } from 'react-router-dom';
import bacolod from '../assets/images/bacolod.png';
import cdo from '../assets/images/cdo.png';
import cebu from '../assets/images/cebu.png';
import davao from '../assets/images/davao.png';
import iloilo from '../assets/images/iloilo.png';
import makati from '../assets/images/makati.png';

export const Listing4Wheel = () => {
	const navigate = useNavigate();
	const [data, setData] = useState<ICar[]>([]);
	const [currentItems, setCurrentItems] = useState<ICar[]>([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [count, setCount] = useState(0);
	const itemsPerPage = 4; // Number of items to display per page

	const toVehicleDetails = (item: any) => {
		navigate(`/vehicle/details/${item}`);

		setTimeout(() => {
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			});
		}, 0); // Use a small timeout to ensure the navigation has taken place
	};

	useEffect(() => {
		const indexOfLastItem = currentPage * itemsPerPage;
		const indexOfFirstItem = indexOfLastItem - itemsPerPage;
		const toDisplay = Array.isArray(data) ? data.slice(indexOfFirstItem, indexOfLastItem) : [];
		const displayCount = Math.ceil(data.length / itemsPerPage);
		setCount(displayCount);
		setCurrentItems(toDisplay);
	}, [currentPage, data]);

	useEffect(() => {
		fetchData();
	}, []);

	const handlePageChange = (newPage: any) => {
		setCurrentPage(newPage);
	};

	const fetchData = async () => {
		try {
			const response = await axios.get('/api/v1/host/listings'); // Replace with your API endpoint
			setData(response.data.listings); // Update the 'data' state with fetched data
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	};

	return (
		<div className='w-full min-h-fit flex flex-col items-center justify-center sm:px-16 p-2 2xl:pt-10 gap-4'>
			<h4 className='md:pl-20 font-bold md:text-2xl text-xl self-start'>Featured 4-wheelers</h4>
			<div className='2xl:w-full w-3/4 items-center justify-center flex flex-wrap gap-4 mx-auto'>
				{currentItems.map((item, index) => (
					<Card className='drop-shadow-lg hover:scale-[102%] hover:transition-transform h-fit w-72' key={index}>
						<div className='relative transition p-2'>
							<img
								src={item.vehiclePhotos[0].toString()}
								alt={`Image ${index}`}
								onError={(e: any) => (e.target.src = imageUnavailable)}
								className='mx-auto w-full h-48 object-cover select-none object-center rounded-md'
							/>
						</div>
						<CardContent className='flex flex-col w-full h-16 gap-0 justify-center text-center items-center'>
							<h4 className='flex text-xl font-extrabold'>{item.brand + ' ' + item.model}</h4>
							<p className='flex text-md font-semibold'>Php {item.price}/day</p>
						</CardContent>
						<div className='px-4 pb-4 pt-2 w-full flex text-center'>
							<button
								onClick={() => toVehicleDetails(item._id)}
								className='text-dark900 rounded-full w-full py-2 bg-yellow font-bold text-md hover:shadow-md transition'
							>
								Rent Now
							</button>
						</div>
					</Card>
				))}
			</div>
			<Pagination
				className=' self-center'
				count={count}
				color='standard'
				shape='rounded'
				page={currentPage}
				onChange={(event, newPage) => handlePageChange(newPage)}
			/>
		</div>
	);
};

export const Listing2Wheel = () => {
	const navigate = useNavigate();
	const [data, setData] = useState<ICar[]>([]);
	const [currentItems, setCurrentItems] = useState<ICar[]>([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [count, setCount] = useState(0);
	const itemsPerPage = 4; // Number of items to display per page

	const toVehicleDetails = (item: any) => {
		navigate(`/vehicle/details/${item}`);

		setTimeout(() => {
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			});
		}, 0); // Use a small timeout to ensure the navigation has taken place
	};

	useEffect(() => {
		const indexOfLastItem = currentPage * itemsPerPage;
		const indexOfFirstItem = indexOfLastItem - itemsPerPage;
		const toDisplay = Array.isArray(data) ? data.slice(indexOfFirstItem, indexOfLastItem) : [];
		const displayCount = Math.ceil(data.length / itemsPerPage);
		setCount(displayCount);
		setCurrentItems(toDisplay);
	}, [currentPage, data]);

	useEffect(() => {
		fetchData();
	}, []);

	const handlePageChange = (newPage: any) => {
		setCurrentPage(newPage);
	};

	const fetchData = async () => {
		try {
			const response = await axios.get('/api/v1/host/listings'); // Replace with your API endpoint
			setData(response.data.listings); // Update the 'data' state with fetched data
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	};

	return (
		<div className='w-full min-h-fit flex flex-col items-center justify-center sm:px-16 p-2 2xl:pt-10 gap-4'>
			<h4 className='md:pl-20 font-bold md:text-2xl text-xl self-start'>Featured 2-wheelers</h4>
			<div className='2xl:w-full w-3/4 items-center justify-center flex flex-wrap gap-4 mx-auto'>
				{currentItems.map((item, index) => (
					<Card className='drop-shadow-lg hover:scale-[102%] hover:transition-transform h-fit w-72' key={index}>
						<div className='relative transition p-2'>
							<img
								src={item.vehiclePhotos[0].toString()}
								alt={`Image ${index}`}
								onError={(e: any) => (e.target.src = imageUnavailable)}
								className='mx-auto w-full h-48 object-cover select-none object-center rounded-md'
							/>
						</div>
						<CardContent className='flex flex-col w-full h-16 gap-0 justify-center text-center items-center'>
							<h4 className='flex text-xl font-extrabold'>{item.brand + ' ' + item.model}</h4>
							<p className='flex text-md font-semibold'>Php {item.price}/day</p>
						</CardContent>
						<div className='px-4 pb-4 pt-2 w-full flex text-center'>
							<button
								onClick={() => toVehicleDetails(item._id)}
								className='text-dark900 rounded-full w-full py-2 bg-yellow font-bold text-md hover:shadow-md transition'
							>
								Rent Now
							</button>
						</div>
					</Card>
				))}
			</div>
			<Pagination
				className=' self-center'
				count={count}
				color='standard'
				shape='rounded'
				page={currentPage}
				onChange={(event, newPage) => handlePageChange(newPage)}
			/>
		</div>
	);
};

export const ListingByLocation = () => {
	const navigate = useNavigate();
	const [data, setData] = useState<ICar[]>([]);
	const [currentItems, setCurrentItems] = useState<ICar[]>([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [count, setCount] = useState(0);
	const itemsPerPage = 6; // Number of items to display per page

	const sampleItems: any = [
		{ vehiclePhotos: bacolod, brand: 'BACOLOD' },
		{ vehiclePhotos: cdo, brand: 'CDO' },
		{ vehiclePhotos: cebu, brand: 'CEBU' },
		{ vehiclePhotos: davao, brand: 'DAVAO' },
		{ vehiclePhotos: iloilo, brand: 'ILOILO' },
		{ vehiclePhotos: makati, brand: 'MAKATI' },
		{ vehiclePhotos: bacolod, brand: 'BACOLOD' },
		{ vehiclePhotos: cdo, brand: 'CDO' },
		{ vehiclePhotos: cebu, brand: 'CEBU' },
		{ vehiclePhotos: davao, brand: 'DAVAO' },
		{ vehiclePhotos: iloilo, brand: 'ILOILO' },
		{ vehiclePhotos: makati, brand: 'MAKATI' },
	];

	useEffect(() => {
		const indexOfLastItem = currentPage * itemsPerPage;
		const indexOfFirstItem = indexOfLastItem - itemsPerPage;
		const toDisplay = Array.isArray(data) ? data.slice(indexOfFirstItem, indexOfLastItem) : [];
		const displayCount = Math.ceil(data.length / itemsPerPage);
		setCount(displayCount);
		setCurrentItems(toDisplay);
	}, [currentPage, data]);

	useEffect(() => {
		setData(sampleItems);
		//fetchData();
	}, []);

	const handlePageChange = (newPage: any) => {
		setCurrentPage(newPage);
	};

	// const fetchData = async () => {
	// 	try {
	// 		const response = await axios.get('/api/v1/host/listings'); // Replace with your API endpoint
	// 		setData(response.data.listings); // Update the 'data' state with fetched data
	// 	} catch (error) {
	// 		console.error('Error fetching data:', error);
	// 	}
	// };

	return (
		<div className='w-full min-h-fit flex flex-col items-center justify-center p-2 2xl:pt-10 gap-4'>
			<h4 className='md:pl-20 font-bold md:text-2xl text-xl self-start'>Browse by Location</h4>
			<div className='w-full items-center justify-center flex flex-wrap gap-2'>
				{currentItems.map((item, index) => (
					<Card className='drop-shadow-lg hover:scale-[102%] hover:transition-transform h-fit w-fit' key={index}>
						<div className='items-center justify-center'>
							<h4 className='w-full h-full absolute z-10 flex text-lg font-bold justify-center items-center text-[rgba(0,0,0,0)] hover:text-[rgba(0,0,0,1)] hover:bg-[rgba(255,246,81,0.8)] transition-all duration-300 ease-in-out'>
								{item.brand}
							</h4>
							<img
								src={item.vehiclePhotos.toString()}
								alt={`Image ${index}`}
								onError={(e: any) => (e.target.src = imageUnavailable)}
								className='mx-auto 3xl:w-64 xl:w-[14rem] lg:w-[16rem] w-[16rem] h-[16rem] 3xl:h-72 object-cover select-none object-center'
							/>
						</div>
					</Card>
				))}
				<div className='2xl:w-64 xl:w-[14rem] lg:w-[16rem] w-[12rem] 2xl:absolute'></div>
				<div className='2xl:w-64 xl:w-[14rem] lg:w-[16rem] w-[12rem]  2xl:absolute'></div>
				<div className='2xl:w-64 xl:w-[14rem] lg:w-[16rem] w-[12rem]  2xl:absolute'></div>
				<div className='2xl:w-64 xl:w-[14rem] lg:w-[16rem] w-[12rem] 2xl:absolute '></div>
			</div>
			<Pagination
				className=' self-center'
				count={count}
				color='standard'
				shape='rounded'
				page={currentPage}
				onChange={(event, newPage) => handlePageChange(newPage)}
			/>
		</div>
	);
};

export default { Listing2Wheel, Listing4Wheel, ListingByLocation };
