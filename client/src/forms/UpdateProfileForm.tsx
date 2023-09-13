import React, { useState, useEffect } from 'react';
import { InputBox } from '../components/InputBox.tsx';
import { TextField, Box } from '@mui/material';
import { MdCloudUpload } from 'react-icons/md';
import axios from 'axios';
import { UserUpdate } from '../../types/types';
import { useUser } from '../../hooks/zustand/useUser';
import { initialUserUpdate } from '../../types/initialInfo';

const UpdateProfile = () => {
	const store = useUser();
	const { user = {} }: any = store?.user || {};

	const [data, setData] = useState(user);

	const handleChange = (e: any) => {
		setData({ ...data, [e.target.name]: e.target.value });
	};
	const onSubmit = async (e: React.FormEvent): Promise<void> => {
		e.preventDefault();
		try {
			const response = await axios.patch('/api/v1/auth/updateUser', data);
			console.log(response);
			store?.setUser(response.data.data);
		} catch (error) {
			console.error(error);
		}
		console.log(data);
		window.location.href = '/profile';
	};

	return (
		<div className='flex flex-col items-center justify-center h-full w-full'>
			<p className='text-base font-semibold text-dark800'>Update Profile</p>
			<div className='p-4'>
				<div className='flex items-center justify-center'>
					<div className='flex items-center justify-center w-full'>
						<label
							htmlFor='dropzone-file'
							className='flex flex-col items-center justify-center w-40 h-40 border-2 border-gray-300 border-dashed rounded-full cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600'
						>
							<div className='flex flex-col items-center justify-center pt-5 pb-6'>
								<MdCloudUpload size='28px' color='#747474' />
								<p className='mb-2 text-sm text-gray-500 dark:text-gray-400 px-2 text-center'>
									<span className='font-semibold'>Click to upload</span> or drag and drop
								</p>
								<p className='text-xs text-gray-500 dark:text-gray-400 text-center'>PNG/JPG/HEIC</p>
							</div>
							<input id='dropzone-file' type='file' className='hidden' />
						</label>
					</div>
				</div>
				<form onSubmit={onSubmit} className='mt-4 flex flex-col gap-4'>
					<div className='flex flex-col sm:flex-row items-center gap-4'>
						<TextField
							onChange={handleChange}
							id='firstName'
							name='firstName'
							size='small'
							label='First Name'
							variant='outlined'
							placeholder=''
							type='text'
							className='w-full'
							value={data.firstName}
						/>
						<TextField
							onChange={handleChange}
							size='small'
							id='lastName'
							name='lastName'
							label='Last Name'
							variant='outlined'
							placeholder=''
							type='text'
							className='w-full'
							value={data.lastName}
						/>
					</div>
					<div className='flex flex-col sm:flex-row items-center gap-4'>
						<TextField
							onChange={handleChange}
							size='small'
							label='Email'
							id='email'
							name='email'
							variant='outlined'
							placeholder=''
							type='email'
							className='w-full'
							value={data.email}
						/>
						<TextField
							onChange={handleChange}
							size='small'
							label='Number'
							id='phoneNumber'
							name='phoneNumber'
							variant='outlined'
							placeholder=''
							type='number'
							className='w-full'
							value={data.phoneNumber}
						/>
					</div>
					<div className='flex flex-col sm:flex-row items-center gap-4'>
						<TextField
							onChange={handleChange}
							size='small'
							label='Profession'
							id='profession'
							name='profession'
							variant='outlined'
							placeholder=''
							type='text'
							className='w-full'
							value={data.profession}
						/>
						<TextField
							onChange={handleChange}
							size='small'
							label='Language'
							id='language'
							name='language'
							variant='outlined'
							placeholder=''
							type='text'
							className='w-full'
							value={data.language}
						/>
					</div>
					<div className=''>
						<Box
							component='div'
							sx={{
								'& .MuiTextField-root': { width: 'full' },
							}}
						>
							<TextField
								onChange={handleChange}
								id='aboutMe'
								name='aboutMe'
								label='About Me'
								multiline
								rows={4}
								placeholder='Tell us about yourself...'
								className='w-full'
								value={data.aboutMe}
							/>
						</Box>
					</div>
					<button type='submit' className='px-6 py-3 bg-yellow hover:bg-dark400 shadow rounded text-sm text-dark800'>
						Update
					</button>
				</form>
			</div>
		</div>
	);
};

export default UpdateProfile;
