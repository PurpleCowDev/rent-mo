import React, { useState } from 'react';
import BgHomepage from '../assets/images/Rent-mo-hero-bg.png';
import axios from 'axios';
import { ButtonLinkFill, ButtonFill, GoogleButton } from '../components/Buttons.tsx';
import { TextField } from '@mui/material';

interface UserSignUp {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
}
const initialUserState: UserSignUp = {
	firstName: '',
	lastName: '',
	email: '',
	password: '',
};

function Registration() {
	const [user, setUser] = useState(initialUserState);

	const handleSubmit = async (e: React.FormEvent): Promise<void> => {
		e.preventDefault();
		try {
			const req = await axios.post('/api/v1/auth/register', user);
			console.log(req.data);
		} catch (error) {
			console.log(error);
		}
	};

	const handleChange = (e: any) => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};

	console.log(user);

	return (
		<>
			<div
				className='bg-gradient-to-tl bg-cover bg-center w-full min-h-screen py-10 px-0 font-Messina-Sans overflow-x-hidden'
				style={{ backgroundImage: `url(${BgHomepage})` }}
			>
				<div className='flex flex-col items-center justify-center'>
					<img className=' h-20 inline self-center no-select' src='../src/assets/logo/RentMo-logo.svg'></img>
					<form onSubmit={handleSubmit} className='bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-10'>
						<p
							tabIndex={0}
							role='heading'
							aria-label='Login to your account'
							className='text-2xl font-extrabold leading-6 text-gray-800'
						>
							Start your journey here
						</p>
						<GoogleButton />
						<div className='w-full flex items-center justify-between py-5'>
							<hr className='w-full bg-dark600' />
							<p className='text-base font-medium leading-4 px-2.5 text-dark600'>OR</p>
							<hr className='w-full bg-dark600' />
						</div>
						<div className='flex flex-col gap-5 sm:flex-row'>
							<div className='flex flex-col w-full'>
								<TextField
									size='small'
									variant='outlined'
									label='First Name'
									sx={{ width: '100%', mt: 1 }}
									onChange={handleChange}
									value={user.firstName}
									defaultValue={''}
									id='firstName'
									name='firstName'
									type='text'
									placeholder='e.g: Juan'
								/>
							</div>
							<div className='flex flex-col w-full'>
								<TextField
									size='small'
									variant='outlined'
									label='Last Name'
									sx={{ width: '100%', mt: 1 }}
									onChange={handleChange}
									value={user.lastName}
									defaultValue={' '}
									id='lastName'
									name='lastName'
									type='text'
									placeholder='e.g: Cruz'
								/>
							</div>
						</div>
						<div className='mt-6  w-full'>
							<TextField
								size='small'
								variant='outlined'
								label='Email'
								sx={{ width: '100%', mt: 1 }}
								onChange={handleChange}
								value={user.email}
								defaultValue={' '}
								id='email'
								name='email'
								type='email'
								placeholder='e.g: john@gmail.com'
							/>
						</div>
						<div className='mt-6  w-full'>
							<TextField
								size='small'
								variant='outlined'
								label='Password'
								sx={{ width: '100%', mt: 1 }}
								onChange={handleChange}
								value={user.password}
								defaultValue={''}
								id='password'
								name='password'
								type='password'
								placeholder=''
							/>
						</div>

						<div className='mt-8 flex xl:flex-row flex-col gap-5'>
							<ButtonFill text='Create my account' />
							<ButtonLinkFill text='Return' to='/landing' />
						</div>
					</form>
				</div>
			</div>
		</>
	);
}

export default Registration;
