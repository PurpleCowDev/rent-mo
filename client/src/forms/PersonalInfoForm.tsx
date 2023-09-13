import React from 'react';
import { TextField, ThemeProvider } from '@mui/material';
import { ICar } from '../../types/types';
import { theme } from '../themes/themes';

type Props = {
	handleChange: (e: any) => void;
	personalInfo: ICar;
};

const PersonalInfoForm = ({ handleChange, personalInfo }: Props) => {
	return (
		<>
			<ThemeProvider theme={theme}>
				<div>
					<div className=' flex lg:flex-row items-center lg:gap-8 flex-col gap-0 lg:mt-5 mt-0'>
						<div className=' flex flex-col lg:mt-0 mt-5 w-full'>
							<label className='mb-3 text-sm leading-none text-dark900'>Mobile Number</label>
							<TextField
								variant='outlined'
								size='small'
								onChange={handleChange}
								name='mobileNumber'
								id='mobileNumber'
								value={personalInfo.mobileNumber}
								type='number'
								placeholder='09XXXXXXXXX'
								required
							/>
						</div>
						<div className='flex flex-col lg:mt-0 mt-5 w-full'>
							<label className='mb-3 text-sm leading-none text-dark900'>Email Address</label>
							<TextField
								variant='outlined'
								size='small'
								onChange={handleChange}
								name='email'
								id='email'
								value={personalInfo.email}
								type='email'
								placeholder='rentmo@gmail.com'
								required
							/>
						</div>
					</div>
					<div className='lg:mt-5 mt-0 flex lg:flex-row items-center lg:gap-8 flex-col gap-0'>
						<div className='flex flex-col lg:mt-0 mt-5 w-full'>
							<label className='mb-3 text-sm leading-none text-dark900'>Street Address</label>
							<TextField
								variant='outlined'
								size='small'
								onChange={handleChange}
								name='street'
								id='street'
								value={personalInfo.street}
								type='text'
								placeholder='Unit#/Street/Barangay'
								required
							/>
						</div>
						<div className='flex flex-col lg:mt-0 mt-5 w-full'>
							<label className='mb-3 text-sm leading-none text-dark900'>City</label>
							<TextField
								variant='outlined'
								size='small'
								onChange={handleChange}
								name='city'
								id='city'
								value={personalInfo.city}
								type='text'
								placeholder='Enter City'
								required
							/>
						</div>
					</div>
					<div className='lg:mt-5 mt-0 flex lg:flex-row items-center lg:gap-8 flex-col gap-0'>
						<div className='flex flex-col w-full lg:mt-0 mt-5'>
							<label className='mb-3 text-sm leading-none text-dark900'>Province</label>
							<TextField
								variant='outlined'
								size='small'
								onChange={handleChange}
								name='state'
								id='state'
								value={personalInfo.state}
								type='text'
								placeholder='Enter Province'
								required
							/>
						</div>
						<div className='flex flex-col w-full lg:mt-0 mt-5'>
							<label className='mb-3 text-sm leading-none text-dark900'>Country</label>
							<TextField
								variant='outlined'
								size='small'
								onChange={handleChange}
								name='country'
								id='country'
								value={personalInfo.country}
								type='text'
								placeholder='Enter Country'
								required
							/>
						</div>
						<div className='flex flex-col lg:w-1/2 w-full lg:my-0 mt-5 mb-10'>
							<label className='mb-3 text-sm leading-none text-dark900'>Zip Code</label>
							<TextField
								variant='outlined'
								size='small'
								onChange={handleChange}
								name='zipCode'
								id='zipCode'
								value={personalInfo.zipCode}
								type='number'
								placeholder='Zip Code'
								required
							/>
						</div>
					</div>
				</div>
			</ThemeProvider>
		</>
	);
};

export default PersonalInfoForm;
