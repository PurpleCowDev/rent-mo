import React from 'react';
import BgHomepage from '../assets/images/become-host-bg@2x.png';

const ErrorPage = () => {
	return (
		<body
			className='h-screen bg-cover relative font-Messina-Sans'
			style={{ minHeight: 700, backgroundImage: `url(${BgHomepage})` }}
		>
			<div className='absolute inset-0 bg-dark900 opacity-70 px-10'>
				<div className='flex flex-col items-center justify-center text-center w-full h-full'>
					<h1 className='py-0 text-9xl lg:text-[220px] font-extrabold text-white dark:text-white opacity-50'>404</h1>
					<h1 className='pb-6 text-3xl lg:text-4xl  text-white dark:text-white font-Messina-Sans font-thin tracking-widest'>
						Page not found
					</h1>
					<p className='py-2 text-base text-white dark:text-white'>
						The content you’re looking for doesn’t exist. Either it was removed, or you mistyped the link.
					</p>
					<p className='py-2 text-base text-white dark:text-white'>
						Sorry about that! Please visit our hompage to get where you need to go.
					</p>
					<a
						href='/landing'
						className=' lg:w-auto my-20  px-2 sm:px-10 py-3.5 border border-white text-white bg-transparent hover:bg-white hover:text-dark900 transition-all focus:outline-none focus:ring-2 focus:ring-golden-yellow-500 focus:ring-opacity-50 md:text-base text-sm '
					>
						Go back to Homepage
					</a>
				</div>
			</div>
		</body>
	);
};

export default ErrorPage;
