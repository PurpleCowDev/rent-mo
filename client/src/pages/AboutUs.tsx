import React from 'react';
import Navbar from '../components/Navbar.tsx';
import Mission from '../assets/images/profile-bg.jpg';
import Vision from '../assets/units/Marcedes S-Class@2x.png';

const AboutUs = () => {
	return (
		<>
			<div className='flex flex-col w-full h-fit bg-cover bg-no-repeat font-Messina-Sans'>
				<Navbar />
				<div className='absolute w-full h-32 bg-gradient-to-br from-dark700 to-dark900 -z-10'></div>
			</div>
			<div className='bg-gray-100'>
				<div className='max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8'>
					<div className='text-center'>
						<h1 className='text-3xl font-semibold text-gray-900 mb-4'>About Us</h1>
						<p>
							Welcome to RentMo, the premier platform for peer-to-peer vehicle rentals.At RentMo, we're driving the
							future of transportation by redefining the way people access vehicles. Our platform is more than just a
							rental service; it's a revolutionary concept that empowers individuals to share and rent vehicles,
							creating a community-driven ecosystem that's efficient, sustainable, and user-friendly.
						</p>
					</div>
					<div className='mt-12'>
						<div className='grid grid-col-1 gap-12 lg:grid-cols-2'>
							<img className='rounded-lg shadow-lg' src={Mission} alt='Mission' />
							<div className='mt-10 '>
								<h2 className='text-xl font-semibold text-gray-900'>Our Mission</h2>
								<p className='mt-2'>
									Our mission is simple yet impactful: to empower individuals to share and rent vehicles seamlessly. We
									believe in a future where mobility is accessible, affordable, and eco-friendly. Through our platform,
									we're building a community of vehicle owners and renters who collaborate to provide convenient
									transportation solutions.
								</p>
							</div>
						</div>
						<div className='grid grid-col-1 gap-12 lg:grid-cols-2'>
							<div className='mt-20'>
								<h2 className='text-xl font-semibold text-gray-900'>Our Vision</h2>
								<p className='mt-2'>
									We envision a world where vehicles are shared resources, reducing congestion, emissions, and overall
									environmental impact. Our vision is to transform the way people access transportation by facilitating
									safe, convenient, and affordable vehicle rentals. Whether it's a daily commute, a weekend adventure,
									or a special occasion, RentMo is here to connect you with the perfect vehicle.
								</p>
							</div>
							<img className='rounded-lg shadow-lg' src={Vision} alt='Vision' />
						</div>
					</div>
					<div className='mt-12'>
						<h2 className='text-2xl font-semibold text-gray-900'>Our Core Principles</h2>
						<ul className='mt-4 list-disc pl-6'>
							<li>Promoting trust and transparency in peer-to-peer rentals.</li>
							<li>Enabling community-driven sharing economies.</li>
							<li>Delivering exceptional user experiences.</li>
							<li>Supporting sustainable and eco-friendly mobility options.</li>
						</ul>
					</div>
					<div className='mt-12'>
						<h2 className='text-2xl font-semibold text-gray-900'>Target Audience</h2>
						<p className='mt-4'>
							Our platform serves both vehicle owners looking to monetize their assets and individuals seeking flexible
							and cost-effective transportation options.
						</p>
					</div>
					<div className='mt-12'>
						<h2 className='text-2xl font-semibold text-gray-900'>How We Provide Value</h2>
						<p className='mt-4'>
							RentMo provides a convenient and secure way for individuals to rent vehicles directly from owners. By
							connecting owners and renters, we offer a wide range of vehicles to choose from, affordability, and an
							opportunity to contribute to a sustainable sharing economy.
						</p>
						<br />
						<p>
							Join us on this journey toward a more connected, sustainable, and convenient future. Experience the power
							of peer-to-peer vehicle rentals with RentMo, where sharing isn't just an option—it's a lifestyle.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default AboutUs;
