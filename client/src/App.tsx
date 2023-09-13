import { useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import {
	AboutUs,
	ContactUs,
	ErrorPage,
	HelpPage,
	Listing,
	Login,
	MainPage,
	Profile,
	Registration,
	TermsOfService,
	VehicleDetailsPage,
} from './pages';

import Footer from './components/Footer';
import Protected from './components/Protected.tsx';
import GettingStarted from './pages/help_center/GettingStarted.tsx';
import SettingUp from './pages/help_center/SettingUp.tsx';
import ManageAccount from './pages/help_center/ManageAccount.tsx';
import ReservingHelp from './pages/help_center/ReservingHelp.tsx';
import TwoVerification from './pages/help_center/TwoVerification.tsx';

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route
						path='/'
						element={
							<Protected>
								<MainPage />
							</Protected>
						}
					/>
					<Route path='/landing' element={<MainPage />} />
					<Route path='/register' element={<Registration />} />
					<Route path='/login' element={<Login />} />
					<Route
						path='/profile'
						element={
							<Protected>
								<Profile />
							</Protected>
						}
					/>

					<Route
						path='/vehicle/details/:id'
						element={
							<Protected>
								<VehicleDetailsPage />
							</Protected>
						}
					/>
					<Route path='/listing' element={<Listing />} />
					<Route path='/support' element={<HelpPage />} />
					<Route path='/getting-started' element={<GettingStarted />} />
					<Route path='/setting-up' element={<SettingUp />} />
					<Route path='/manage-account' element={<ManageAccount />} />
					<Route path='/reserving-help' element={<ReservingHelp />} />
					<Route path='/two-verification' element={<TwoVerification />} />
					<Route path='/terms-of-services' element={<TermsOfService />} />
					<Route path='/contact-us' element={<ContactUs />} />
					<Route path='/about-us' element={<AboutUs />} />
					<Route path='*' element={<ErrorPage />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
