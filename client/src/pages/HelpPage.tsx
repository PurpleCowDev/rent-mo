import React from 'react';
import Navbar from '../components/Navbar.tsx';
import image_1 from '../assets/images/bacolod.png';
import image_2 from '../assets/images/cdo.png';
import image_3 from '../assets/images/cebu.png';
import image_4 from '../assets/images/davao.png';
import image_5 from '../assets/images/iloilo@2x.png';

const HelpPage = () => {
	const quickGuide = [
		{
			color: 'bg-red-300',
			description: 'Getting started on RentMo',
			link: '/getting-started',
			imageSrc: image_1,
		},
		{
			color: 'bg-blue-300',
			description: 'Setting up your account',
			link: '/setting-up',
			imageSrc: image_2,
		},
		{
			color: 'bg-green-300',
			description: 'How to access and manage your account',
			link: '/manage-account',
			imageSrc: image_3,
		},
		{
			color: 'bg-yellow100',
			description: 'Help with a reservation',
			link: '/reserving-help',
			imageSrc: image_4,
		},
		{
			color: 'bg-purple-300',
			description: 'Setting up two-verification process',
			link: '/two-verification',
			imageSrc: image_5,
		},
	];

	return (
		<>
			<div className='flex flex-col w-full h-fit bg-cover bg-no-repeat font-Messina-Sans'>
				<Navbar />
				<div className='absolute w-full h-32 bg-gradient-to-br from-dark700 to-dark900 -z-10'></div>
			</div>
			<div className='flex flex-col gap-12 items-center mt-20 justify-start lg:px-20 px-8 min-h-screen'>
				<div className='flex flex-col items-center justify-center gap-4 w-96'>
					<h1 className='text-lg font-bold text-dark900'>Hi! Need help?</h1>
					<div className='w-full h-fit flex relative items-center justify-center self-center '>
						<input
							type='text'
							placeholder='Search how-tos and more...'
							className='px-4 py-2 border bg-dark100 rounded-full w-full max-w-md shadow-md outline-none'
						/>
					</div>
				</div>
				<div className=' rounded-md border border-dark300 flex lg:flex-row flex-col justify-between items-center w-full p-4 gap-4'>
					<div className='flex lg:flex-row flex-col lg:items-end items-center justify-center gap-2 w-full'>
						<h2 className='text-xl font-semibold text-dark800'>Don't&#160;fret,&#160;we&#160;got&#160;you!</h2>
						<p className='text-center'>Get&#160;help&#160;with&#160;you&#160;reservations, account,and more.</p>
					</div>
					<a href='/login' className='px-4 py-2 bg-yellow100 text-dark900 rounded-full w-fit'>
						Login&#160;or&#160;signup
					</a>
				</div>
				<div className='flex flex-col justify-start items-start gap-4 w-full pb-10'>
					<h2 className='text-xl font-bold'>Quick starter guide</h2>
					<div className='flex w-full flex-wrap justify-evenly items-center'>
						{quickGuide.map((item, index) => (
							<div key={index} className='flex flex-col h-[340px]'>
								<a
									className={`w-64 h-64 rounded-lg hover:shadow-xl hover:scale-[102%] transition-all`}
									href={item.link}
								>
									<img className='w-full h-full object-cover rounded-xl' src={item.imageSrc} />
									<p className='font-semibold mt-4'>{item.description}</p>
								</a>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default HelpPage;
