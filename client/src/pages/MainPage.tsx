import React, { useEffect } from 'react';
import HeroPage from './HeroPage.tsx';
import { Listing2Wheel, Listing4Wheel } from './ListingPage.tsx';
import HowItWorks from './HowItWorks.tsx';
import HostBookCards from './HostBookCards.tsx';

const MainPage = () => {
	return (
		<div>
			<HeroPage />
			<HowItWorks />
			<Listing4Wheel />
			{/* <Listing2Wheel /> */}
			<HostBookCards />
		</div>
	);
};

export default MainPage;
