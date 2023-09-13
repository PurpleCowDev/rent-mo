import { useState, useEffect } from 'react';
import { useUser } from '../../hooks/zustand/useUser';
import { ButtonLink, ButtonLinkNoFillRounded } from './Buttons';
import { FaBars, FaXmark } from 'react-icons/fa6';
import { BiUser, BiHelpCircle, BiLogOut } from 'react-icons/bi';
import '../index.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo/RentMo-logo.svg';
import avatar from '../assets/logo/avatar-logo.png';

const Navbar = () => {
	const navigate = useNavigate();
	const [profile, setProfile] = useState(false);
	const [show, setShow] = useState(false);
	const store = useUser();
	const { user = {} }: any = store?.user || {};

	const scrollByScreenHeight = () => {
		navigate('/landing');

		setTimeout(() => {
			const screenHeight = window.innerHeight;
			window.scrollBy({
				top: screenHeight,
				behavior: 'smooth',
			});
		}, 0); // Use a small timeout to ensure the navigation has taken place
	};

	async function handleLogout() {
		try {
			const response = await axios.get('/api/v1/auth/logout');
			store?.setUser(null);
			navigate('/landing');
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<>
			<nav className='w-full border-b 2xl:px-36 px-4 border-none bg-black bg-opacity-0'>
				<div className='py-5 lg:py-0 container mx-auto xl:px-2 px-0 flex w-full items-center justify-between'>
					<a aria-label='Home. logo' role='img' href='/landing'>
						<img
							className='w-24 lg:w-36 sm:w-32 xl:w-48  hover:scale-105 hover:drop-shadow-md transition-all'
							src={logo}
							alt='logo'
						/>
					</a>
					<div>
						<button
							onClick={() => setShow(!show)}
							className={`${
								show ? 'hidden' : ''
							} sm:block lg:hidden text-dark800 focus:text-dark800 focus:outline-none focus:ring-2 focus:ring-dark800`}
						>
							<FaBars size='24px' color='#ffffff' />
						</button>
						<div id='menu' className={` ${show ? '' : 'hidden'} lg:block xl:block bg-transparent `}>
							<button
								onClick={() => setShow(!show)}
								className={`lg:hidden xl:hidden text-dark200 hover:text-yellow focus:text-yellow fixed focus:outline-none focus:ring-2 focus:ring-yellow z-30 top-0 right-4 mt-6 sm:right-4 sm:mt-8 md:right-10 md:mt-8 block`}
							>
								<FaXmark size='24px' color='#ffffff' />
							</button>
							<ul className='flex text-3xl lg:text-base items-center py-10 lg:flex flex-col lg:flex-row justify-center fixed lg:relative top-0 bottom-0 left-0 right-0 bg-dark900 lg:bg-transparent z-20 transition'>
								<li className='text-white  cursor-pointer text-xl pt-10 lg:pt-0 transition'>
									<button onClick={() => scrollByScreenHeight()}>How it works </button>
								</li>
								<li className='text-white  cursor-pointer text-xl pt-10 lg:pt-0 lg:ml-5 xl:ml-10 transition'>
									<ButtonLink text='Support' to='/support' />
								</li>
								<li className='text-yellow font-bold cursor-pointer text-xl pt-10 lg:pt-0 lg:ml-5 xl:ml-10 transition'>
									<ButtonLinkNoFillRounded text='Become a host' to={store.user ? '/listing' : '/login'} />
								</li>
								<span className=' xl:mx-10 lg:mt-0 lg:w-[2px] lg:h-10 bg-dark600 bg-white lg:mx-5 w-3/4 h-[1px] mt-14'></span>
								<li className={store.user ? 'hidden' : 'text-white  cursor-pointer text-xl pt-10 lg:pt-0 transition'}>
									<ButtonLink text='Login' to='/login' />
								</li>
								<li
									className={
										store.user
											? 'hidden'
											: 'text-white cursor-pointer text-xl pt-10 lg:pt-0 lg:ml-5 xl:ml-10 transition'
									}
								>
									<ButtonLink text='Sign up' to='/register' />
								</li>
								<li
									className={
										store.user
											? 'flex items-center relative cursor-pointer text-white text-base xl:text-xl pt-10 lg:pt-0 transition'
											: 'hidden'
									}
									onClick={() => setProfile(!profile)}
								>
									{profile && (
										<ul className='hidden lg:block p-2 w-40 border-r bg-white absolute rounded left-0 shadow-searchbox mt-16 top-0'>
											<li className='cursor-pointer text-dark800 text-sm leading-3 tracking-normal py-2 hover:text-yellow focus:text-yellow focus:outline-none transition-colors'>
												<div className='flex items-center'>
													<BiUser size='20px' color='#131313' />
													<a className='w-full hover:text-yellow ml-2' href='/profile'>
														My Profile
													</a>
												</div>
											</li>
											<li className='cursor-pointer text-dark800 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-yellow focus:text-yellow focus:outline-none flex items-center transition-colors'>
												<BiHelpCircle size='20px' color='#131313' />
												<a href='/getting-started' className='w-full hover:text-yellow ml-2'>
													Help Center
												</a>
											</li>
											<li className='cursor-pointer text-dark800 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-yellow flex items-center focus:text-yellow focus:outline-none transition-colors'>
												<BiLogOut size='20px' color='#131313' />
												<button onClick={handleLogout} className='text-left w-full hover:text-yellow ml-2'>
													Logout
												</button>
											</li>
										</ul>
									)}
									<img className='h-10 rounded-full invert select-none' src={avatar} alt='logo' />
									<a
										href='/profile'
										className='select-none text-white lg:text-lg text-xl ml-2 transition-colors font-bold pointer-events-auto lg:pointer-events-none'
									>
										{user.firstName + ' ' + user.lastName}
									</a>
								</li>
								<li
									className={
										store.user
											? 'lg:hidden text-white  cursor-pointer text-xl pt-10 lg:pt-0 lg:ml-5 xl:ml-10 transition'
											: 'hidden'
									}
								>
									<ButtonLink text='Help Center' to='/getting-started' />
								</li>
								<li
									className={
										store.user
											? 'lg:hidden text-white  cursor-pointer text-xl pt-10 lg:pt-0 lg:ml-5 xl:ml-10 transition'
											: 'hidden'
									}
								>
									<button onClick={handleLogout} className=' hover:text-yellow transition'>
										Logout
									</button>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
