import React from 'react';
import HostCard from '../components/HostCard';
import BookCard from '../components/BookCard';

const HostBookCards = () => {
	return (
		<div className='flex lg:flex-row flex-col justify-center gap-4 w-full h-fit items-center translate-y-20 md:px-0 px-2'>
			<HostCard />
			<BookCard />
		</div>
	);
};

export default HostBookCards;
