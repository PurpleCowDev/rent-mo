import React, { useState } from 'react';
import BgHomepage from '../assets/images/Rent-mo-hero-bg.png';
import axios from 'axios';
import { ButtonLinkFill, ButtonFill, GoogleButton } from '../components/Buttons.tsx';
import { TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../hooks/zustand/useUser';

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

function Login() {
	const [user, setUser] = useState(initialUserState);
	const [isFailure, setIsFailure] = useState(false);
	const navigate = useNavigate();
	const store = useUser();

	const handleSubmit = async (e: React.FormEvent): Promise<void> => {
		e.preventDefault();
		try {
			const res = await axios.post('/api/v1/auth/login', user);
			if (res.data.message === 'Invalid Credentials' || res.data.message === 'user does not exist' || !res.data) {
				setIsFailure(true);
				return;
			}
			console.log(res.data);
			const response = await axios.get('/api/v1/user/my-info');
			const userData = response?.data || null;
			store.setUser(userData);
			navigate('/profile');
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
				className=' min-h-screen bg-gradient-to-tl bg-cover bg-center w-full py-10 px-4 font-Messina-Sans'
				style={{ backgroundImage: `url(${BgHomepage})` }}
			>
				<div className='flex flex-col items-center justify-center'>
					<img className=' h-20 inline self-center no-select' src='../src/assets/logo/RentMo-logo.svg'></img>
					<form onSubmit={handleSubmit} className='bg-white shadow rounded lg:w-1/3 md:w-1/2 w-full p-10 mt-10'>
						<p
							tabIndex={0}
							role='heading'
							aria-label='Login to your account'
							className='text-2xl font-extrabold leading-6 text-gray-800'
						>
							Login to your account
						</p>
						<p className='text-sm mt-4 font-medium leading-none text-gray-500'>
							Dont have account?{' '}
							<a
								tabIndex={0}
								role='link'
								href='/register'
								aria-label='Sign up here'
								className='text-sm font-medium leading-none underline text-gray-800 cursor-pointer'
							>
								{' '}
								Sign up here
							</a>
						</p>
						<GoogleButton />
						<div className='w-full flex items-center justify-between py-5'>
							<hr className='w-full bg-dark600' />
							<p className='text-base font-medium leading-4 px-2.5 text-dark600'>OR</p>
							<hr className='w-full bg-dark600' />
						</div>
						<div>
							<TextField
								size='small'
								variant='outlined'
								label='Email'
								sx={{ width: '100%', mt: 1 }}
								onChange={handleChange}
								value={user.email}
								defaultValue={''}
								id='email'
								name='email'
								type='email'
								placeholder='e.g: john@gmail.com'
							/>
						</div>
						<div className='mt-6  w-full'>
							<div className='relative flex items-center justify-center'>
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
							<small className={`text-red-500 ${isFailure ? 'visible' : 'hidden'}`}>Invalid credentials</small>
						</div>
						<div className='mt-8'>
							<ButtonFill text='Login' />
						</div>
						<div className='mt-8 w-full flex'>
							<ButtonLinkFill text='Return' to='/landing' />
						</div>
					</form>
				</div>
			</div>
		</>
	);
}

export default Login;
