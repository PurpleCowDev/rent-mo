import React, { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Checkbox, FormControlLabel, FormGroup, TextField } from '@mui/material';
import ImageUploader from '../components/ImageUploader';
import { ICar } from '../../types/types';

type Props = {
	handleChange: (e: any) => void;
	listingInfo: ICar;
};

const listingInfoForm = ({ handleChange, listingInfo }: Props) => {
	const [checked, setChecked] = useState(false);

	//handle date change
	const handleStartDateChange = (date: Date | null) => {
		handleChange({
			target: {
				name: 'startDate',
				value: date,
			},
		});
	};
	const handleEndDateChange = (date: Date | null) => {
		handleChange({
			target: {
				name: 'endDate',
				value: date,
			},
		});
	};

	const handleCheckboxChange = (event: any) => {
		setChecked(event.target.checked);
		if (!checked) {
			handleEndDateChange(null);
			handleStartDateChange(new Date(Date.now()));
		} else {
			handleEndDateChange(new Date(Date.now()));
			handleStartDateChange(new Date(Date.now()));
		}
	};

	return (
		<>
			<div className='flex md:flex-row flex-col md:mt-0 mt-5 items-center md:gap-8 gap-5'>
				<div className='flex flex-col w-full'>
					<label className='mb-3 text-sm leading-none text-dark900'>Car Brand</label>
					<TextField
						size='small'
						onChange={handleChange}
						value={listingInfo.brand}
						name='brand'
						id='brand'
						type='text'
						placeholder='Enter car brand'
						required
					/>
				</div>
				<div className='flex flex-col w-full'>
					<label className='mb-3 text-sm leading-none text-dark900'>Car Model</label>
					<TextField
						size='small'
						onChange={handleChange}
						value={listingInfo.model}
						name='model'
						id='model'
						type='text'
						placeholder='Enter car model'
						required
					/>
				</div>
			</div>
			<div className='flex md:flex-row flex-col mt-3 items-center md:gap-8 gap-5'>
				<div className='flex flex-col w-full'>
					<label className='mb-2 text-sm leading-none text-dark900'>License Plate Number</label>
					<TextField
						size='small'
						onChange={handleChange}
						value={listingInfo.licensePlateNumber}
						name='licensePlateNumber'
						id='licensePlateNumber'
						type='text'
						placeholder='Enter license'
						required
					/>
				</div>
				<div className='flex flex-col w-full'>
					<label className='mb-2 text-sm leading-none text-dark900'>Vehicle Identification Number</label>
					<TextField
						size='small'
						onChange={handleChange}
						value={listingInfo.carRegistrationNumber}
						name='carRegistrationNumber'
						id='carRegistrationNumber'
						type='text'
						placeholder='Enter VIN'
						required
					/>
				</div>
			</div>
			<p className='mt-3 text-sm leading-none text-dark900'>Car Availability</p>
			<div className='mt-4 flex items-center gap-8'>
				<div className='flex flex-col w-full'>
					<LocalizationProvider dateAdapter={AdapterDateFns}>
						<div className='flex flex-row w-full md:gap-8 gap-2'>
							<DatePicker
								disabled={checked}
								onChange={handleStartDateChange}
								value={new Date(listingInfo.carAvailability.startDate)}
								label='Start Date'
								className=' w-full'
								slotProps={{ textField: { size: 'small' } }}
								defaultValue={new Date(Date.now())}
							/>
							<DatePicker
								disabled={checked}
								onChange={handleEndDateChange}
								value={new Date(listingInfo.carAvailability.endDate)}
								label='End Date'
								className='w-full'
								slotProps={{ textField: { size: 'small' } }}
								defaultValue={new Date(Date.now())}
							/>
							<FormGroup className='w-1/2'>
								<FormControlLabel
									value='Always'
									control={
										<Checkbox
											checked={checked}
											onChange={handleCheckboxChange}
											name='isAlways'
											id='isAlways'
											value={checked}
											inputProps={{ 'aria-label': 'controlled' }}
										/>
									}
									label='Always Available'
									labelPlacement='end'
								/>
							</FormGroup>
						</div>
					</LocalizationProvider>
				</div>
			</div>
			<p className='mt-2 mb-4 text-sm font-semibold leading-none text-dark900'>Upload photo of your vehicle</p>
			<ImageUploader handleChange={handleChange} imageFile={listingInfo} />
		</>
	);
};

export default listingInfoForm;
