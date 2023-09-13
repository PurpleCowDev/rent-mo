import React from 'react';
import Navbar from '../components/Navbar.tsx';
import Footer from '../components/Footer.tsx';

const ContactUs = () => {
	return (
		<div className=' font-Messina-Sans'>
			<div className='flex flex-col w-full h-fit pb-16 bg-cover bg-no-repeat'>
				<Navbar />
				<div className='absolute w-full h-32 bg-gradient-to-br from-dark700 to-dark900 -z-10'></div>
			</div>
			<div className='w-9/12 mx-auto mb-10'>
				<h1 className='text-3xl font-semibold mb-4'>Contact Us</h1>
				<p>Have a question, suggestion, or need assistance? Feel free to reach out to us.</p>
				<div className='mt-4'>
					<h2 className='text-xl font-semibold mb-2'>Customer Support</h2>
					<p>
						If you need help with your account, reservations, or have any inquiries, our customer support team is here
						for you.
					</p>
					<p>
						Email: <a href='mailto:support@example.com'>support@rentmo.com</a>
					</p>
					<p>Phone: +639-xxx-xxxx</p>
				</div>
				<div className='mt-4'>
					<h2 className='text-xl font-semibold mb-2'>Business Inquiries</h2>
					<p>
						For business-related inquiries, partnerships, and collaborations, please contact our business development
						team.
					</p>
					<p>
						Email: <a href='mailto:business@example.com'>business@rentmo.com</a>
					</p>
					<p>Phone: +639-xxx-xxxx</p>
				</div>
				<div className='mt-4'>
					<h2 className='text-xl font-semibold mb-2'>Feedback</h2>
					<p>We value your feedback and suggestions. Help us improve our services by sharing your thoughts.</p>
					<p>
						Email: <a href='mailto:feedback@example.com'>feedback@rentmo.com</a>
					</p>
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default ContactUs;
