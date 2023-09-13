import React, { useState, ChangeEvent, useEffect } from 'react';
import { MdCloudUpload, MdAddCircle, MdClose } from 'react-icons/md';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { ICar } from '../../types/types';
import { set } from 'date-fns';

type Props = {
	handleChange: (e: any) => void;
	imageFile: ICar;
};

function ImageUploader({ handleChange, imageFile }: Props) {
	const [images, setImages] = useState<any>(imageFile.vehiclePhotos);

	const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
		if (event.target.files) {
			const selectedImages: File[] = Array.from(event.target.files);

			if (selectedImages.length === 1) {
				// Handle single image upload
				const updatedImages = [...images, selectedImages[0]];
				handleChange({
					target: {
						name: 'vehiclePhotos',
						value: updatedImages,
					},
				});
				setImages(updatedImages);
			} else if (selectedImages.length > 1) {
				// Handle multiple image upload (limit to 8 images)
				const limitedImages = selectedImages.slice(0, 8 - images.length);
				const updatedImages = [...images, ...limitedImages];
				handleChange({
					target: {
						name: 'vehiclePhotos',
						value: updatedImages,
					},
				});
				setImages(updatedImages);
			}
		}
	};

	const handleRemoveImage = (indexToRemove: number) => {
		const updatedImages = images.filter((_: any, index: number) => index !== indexToRemove);
		setImages(updatedImages);
		handleChange({ target: { name: 'vehiclePhotos', value: updatedImages } });
	};

	return (
		<div>
			<div className='mt-3 lg:flex items-center'>
				<div className='flex items-center justify-center w-full'>
					{imageFile.vehiclePhotos.length === 0 ? (
						<label
							htmlFor='vehiclePhotos'
							className='flex flex-col items-center justify-center w-full h-24 border-2 border-gray-400 border-dashed rounded-lg cursor-pointer bg-white hover:bg-dark100'
						>
							<div className='flex flex-col items-center justify-center pt-5 pb-6'>
								<MdCloudUpload size='30px' color='#747474' />
								<p className='mb-2 text-sm text-dark600 dark:text-dark200'>
									<span className='font-semibold'>Click to upload</span> or drag and drop
								</p>
								<p className='text-xs text-dark600 dark:text-dark200'>HEIC, PNG, JPG</p>
							</div>
							<input
								type='file'
								multiple
								accept='image/*'
								onChange={handleImageChange}
								className='hidden'
								id='vehiclePhotos'
								name='vehiclePhotos'
							/>
						</label>
					) : null}
				</div>
			</div>

			{imageFile.vehiclePhotos.length > 0 && (
				<div className='h-full w-full flex'>
					<Carousel
						showStatus={false}
						showThumbs={false}
						infiniteLoop={false}
						swipeable={true}
						emulateTouch={true}
						showArrows={imageFile.vehiclePhotos.length < 4 ? false : true}
						centerMode={imageFile.vehiclePhotos.length < 2 ? false : true}
						centerSlidePercentage={imageFile.vehiclePhotos.length === 2 ? 50 : 33.33}
						className='carousel-container w-full'
					>
						{imageFile.vehiclePhotos.map((image, index) => (
							<div key={index} className='carousel-slide relative hover:scale-[1.02] mx-1 my-2 transition'>
								<img
									src={typeof image === 'string' ? image : URL.createObjectURL(image)}
									alt={`Image ${index}`}
									className='mx-auto h-24 shadow-md object-cover select-none'
								/>
								<button
									type='button'
									className='absolute top-3 right-3 p-1 bg-dark900 rounded-full text-red-100 hover:text-red-300 hover:scale-105 transition'
									onClick={() => handleRemoveImage(index)}
								>
									<MdClose size='16px' />
								</button>
							</div>
						))}
					</Carousel>
					{imageFile.vehiclePhotos.length > 0 && imageFile.vehiclePhotos.length < 8 && (
						<div className='flex items-center self-center text-center md:mx-5 mx-3'>
							<label
								htmlFor='vehiclePhotos'
								className='cursor-pointer hover:text-dark900 transition-all text-dark500 hover:scale-110'
							>
								<MdAddCircle size='32px' />
							</label>
							<input
								type='file'
								multiple
								accept='image/*'
								onChange={handleImageChange}
								className='hidden'
								id='vehiclePhotos'
								name='vehiclePhotos'
							/>
						</div>
					)}
				</div>
			)}
		</div>
	);
}

export default ImageUploader;
