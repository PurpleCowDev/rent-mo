import React, { useState, useEffect, useRef } from 'react';
import { ICar } from 'types/types';
import imageUnavailable from '../assets/logo/image_not_available.png';
import { CardContent, Card, Pagination } from '@mui/material';
import { BsFillStarFill, BsMapFill, BsTelephoneFill, BsCashCoin } from 'react-icons/bs';
import axios from 'axios';
import Modal from 'react-responsive-modal';
import ListingStepper from './ListingStepperUpdate.tsx';
import { initialInfoState } from '../../types/initialInfo';
import 'react-responsive-modal/styles.css';

const MyListings = () => {
	const [update, setUpdate] = useState(false);
	const [updateData, setUpdateData] = useState(initialInfoState);
	const [itemsPerPage, setItemsPerPage] = useState(4); // Number of items to display per page
	const [data, setData] = useState<ICar[]>([]);
	const [deleteItem, setDeleteItem] = useState<ICar>();
	const [currentItems, setCurrentItems] = useState<ICar[]>([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [count, setCount] = useState(0);
	const [modalIsOpen, setIsOpen] = React.useState(false);
	const updateRef = useRef<HTMLDivElement | null>(null);

	const handleUpdate = (item: any) => {
		setUpdate(!update);
		setUpdateData(item);
		if (updateRef.current) {
			updateRef.current.scrollIntoView({ behavior: 'smooth' });
		}
	};

	function openModal(item: ICar) {
		setIsOpen(true);
		setDeleteItem(item);
	}

	function closeModal() {
		setIsOpen(false);
	}

	const handleDelete = async () => {
		const deleteItemID = deleteItem?._id;
		try {
			const response = await axios.delete(`/api/v1/host/listing/${deleteItemID}`);
			window.location.reload();
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		const updateItemsPerPage = () => {
			if (window.innerWidth < 600) {
				setItemsPerPage(1);
			} else if (window.innerWidth < 1630) {
				setItemsPerPage(2);
			} else if (window.innerWidth < 1900) {
				setItemsPerPage(3);
			} else {
				setItemsPerPage(4);
			}
		};

		// Initial update
		updateItemsPerPage();

		// Event listener for window resize
		window.addEventListener('resize', updateItemsPerPage);

		// Clean up the event listener when component unmounts
		return () => {
			window.removeEventListener('resize', updateItemsPerPage);
		};
	}, []);

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
	}, [itemsPerPage]);

	const handlePageChange = (newPage: any) => {
		setCurrentPage(newPage);
	};
	const fetchData = async () => {
		try {
			const response = await axios.get('/api/v1/host/listing/my-listings'); // Replace with your API endpoint
			setData(response.data.listingsByUser); // Update the 'data' state with fetched data
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	};
	return (
		<>
			<div
				ref={update ? updateRef : null}
				className='w-full h-fit flex flex-col items-center justify-center p-0 gap-10'
			>
				<div className='flex w-full items-center'>
					<img className='h-8' src='../src/assets/logo/icons8-car.png' alt='logo' />
					<p className='block p-2 no-select w-full'>{data.length + ' Listing/s'}</p>
				</div>
				<div className='w-full items-center justify-center flex flex-wrap gap-4 mx-auto'>
					{currentItems.map((item, index) => (
						<Card
							className='drop-shadow-lg 2xl:hover:-translate-y-2 hover:transition-transform sm:w-64 w-full'
							key={index}
						>
							<div className='relative transition p-2'>
								<img
									src={item.vehiclePhotos[0].toString()}
									alt={`Image ${index}`}
									onError={(e: any) => (e.target.src = imageUnavailable)}
									className='mx-auto w-full h-48 object-cover select-none object-center rounded-md'
								/>
							</div>

							<CardContent className='flex flex-col w-full h-12 gap-0 justify-center text-center items-center'>
								<h4 className='flex text-xl font-extrabold'>{item.brand + ' ' + item.model}</h4>
								<p className='flex text-md font-semibold'>Php {item.price}/day</p>
							</CardContent>
							<div className='flex justify-between items-center p-4'>
								<button
									onClick={() => openModal(item)}
									className=' hover:bg-dark300 transition-colors bg-dark400 px-4 py-1 rounded-sm'
								>
									Remove
								</button>
								<Modal open={modalIsOpen} onClose={() => closeModal()} center>
									<div className='w-64 h-20 font-Messina-Sans'>Are you sure?</div>
									<div className='flex gap-4 justify-end font-Messina-Sans'>
										<button
											onClick={() => handleDelete()}
											className='transition-colors bg-yellow hover:bg-[#fff8af] text-dark800 px-6 py-1 rounded-sm'
										>
											Yes
										</button>
										<button
											onClick={() => closeModal()}
											className='transition-colors bg-dark500 hover:bg-dark200 text-dark800 px-6 py-1 rounded-sm'
										>
											No
										</button>
									</div>
								</Modal>
								<button
									onClick={() => handleUpdate(item)}
									className='hover:shadow-md transition-transform bg-yellow100 px-4 py-1 rounded-sm'
								>
									Update
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
			<div
				ref={!update ? updateRef : null}
				className={`self-center w-fit transition-transform ${update ? 'scale-y-100 h-fit' : 'scale-y-0 h-0'}`}
			>
				<ListingStepper itemData={updateData} />
			</div>
		</>
	);
};

export default MyListings;
