import React from 'react';
import Navbar from '../../components/Navbar.tsx';

const SettingUp = () => {
	return (
		<div className=' font-Messina-Sans'>
			<div className='flex flex-col w-full h-fit pb-20 bg-cover bg-no-repeat'>
				<Navbar />
				<div className='absolute w-full h-32 bg-gradient-to-br from-dark700 to-dark900 -z-10'></div>
			</div>
			<div className='flex flex-col items-center justify-center w-full h-full'>
				<h1 className='py-0 text-9xl lg:text-[20px] font-extrabold text-dark900 dark:text-white'>Hi! Need help?</h1>
				<div className='w-full h-fit flex relative items-center justify-center self-center '>
					{/* Search bar */}
					<input
						type='text'
						placeholder='     Search how-tos and more'
						className='p-3 mt-4 border bg-blue-gray-100 border-gray-300 rounded-full w-full max-w-md placeholder-dark900'
					/>
				</div>
			</div>

			<div className='flex flex-row justify-between'>
				{/* Left Content */}
				<div className='w-2/5 p-8 ml-72'>
					<p className='font-bold mb-1'>How-to</p>
					<h2 className='font-bold text-2xl mb-0'>Set up your account</h2>
					<p className='mb-8'>
						Need to make a change or two? You can edit your account settings, as well as some information on your public
						profile, from your Account section.
					</p>
					<h2 className='font-bold text-2xl mt-8 mb-4'>Creating Your Account</h2>
					<p className='lg:text-base text-sm'>To get started, follow these steps to create your account:</p>
					<ol className='list-decimal pl-6'>
						<li>Visit our website at RentMo.com.</li>
						<li>Click on the "Sign Up" or "Register" button.</li>
						<li>Fill in the required information, including your name, email address, and password.</li>
						<li>Accept our terms of use and privacy policy.</li>
						<li>Click "Sign Up" to complete the process.</li>
					</ol>

					<h2 className='font-bold text-2xl mt-8 mb-4'>Verifying Your Email</h2>
					<p className='lg:text-base text-sm'>
						After signing up, you'll receive a verification email at the address you provided. Follow these steps to
						verify your email:
					</p>
					<ol className='list-decimal pl-6'>
						<li>Open the email from RentMo.</li>
						<li>Click the "Verify Email".</li>
					</ol>
					<p className='lg:text-base text-sm'>
						This step is crucial to ensure the security of your account and to receive important updates.
					</p>

					<h2 className='font-bold text-2xl mt-8 mb-4'>Updating Your Profile Information</h2>
					<p className='lg:text-base text-sm'>Customize your profile to help others connect with you:</p>
					<ol className='list-decimal pl-6'>
						<li>Log in to your account.</li>
						<li>Navigate to the "Profile" or "Account Settings" section.</li>
						<li>Update your profile picture, contact information, and any other relevant details.</li>
						<li>Click "Save" to apply your changes.</li>
					</ol>

					<h2 className='font-bold text-2xl mt-8 mb-4'>Setting Your Preferences</h2>
					<p className='lg:text-base text-sm'>Tailor your experience by adjusting your account preferences:</p>
					<ol className='list-decimal pl-6'>
						<li>Access your account settings.</li>
						<li>
							Explore options like notification settings, language preferences, and email communication frequency.
						</li>
						<li>Make changes according to your preferences and save your settings.</li>
					</ol>

					<h2 className='font-bold text-2xl mt-8 mb-4'>Managing Account Security</h2>
					<p className='lg:text-base text-sm'>
						We take your account security seriously. Follow these steps to enhance your account's safety:
					</p>
					<ol className='list-decimal pl-6'>
						<li>Enable two-factor authentication (2FA) in your account settings.</li>
						<li>Regularly review the devices that have access to your account.</li>
						<li>Avoid sharing your password or account information with anyone.</li>
					</ol>

					<h2 className='font-bold text-2xl mt-8 mb-4'>Recovering Your Password</h2>
					<p className='lg:text-base text-sm'>Forgot your password? No worries, you can reset it:</p>
					<ol className='list-decimal pl-6'>
						<li>On the login page, click "Forgot Password".</li>
						<li>Enter your email address and follow the instructions sent to your inbox.</li>
						<li>Create a new password and ensure it's secure.</li>
					</ol>

					<p className='lg:text-base text-sm'>
						Remember, if you encounter any difficulties during the account setup process or have any questions, feel
						free to reach out to our support team. We're here to assist you every step of the way.
					</p>
					<div className='mt-8'>
						<hr className='w-full border-gray-500 mx-auto' />{' '}
					</div>
					<h2 className='font-bold text-2xl mt-8 mb-4'>Related Articles</h2>
					<a className='font-bold text-xl ' href='/getting-started'>
						<u>Getting Started</u>
					</a>
					<p className='lg:text-base text-sm'>
						Just joined us? We're excited to have you on board! Discover how to set up your account, personalize your
						profile, and manage your notification preferences to make the most of your experience.
					</p>
					<div className='mt-8 mb-8'>
						<hr className='w-full border-gray-500 mx-auto' />{' '}
					</div>
					<a className='font-bold text-xl' href='/manage-account'>
						<u>How to access and manage your account</u>
					</a>
					<p className='lg:text-base text-sm'>
						Learn how to effortlessly navigate through your account settings, update personal information, enhance
						security measures, and efficiently manage payments.
					</p>
					{/* Add more content here */}
				</div>

				{/* Right Content */}
				<div>
					<div className='w-2/8 mt-8 mr-52 bg-white rounded-lg border border-gray-300 p-8'>
						<div className='flex flex-col'>
							<p className='mt-1 font-semibold text-xl text-gray-800'>
								Get help with your reservations, account, and more.
							</p>
							<a href='/login' className='px-4 py-2 bg-yellow100 mt-3 text-white rounded-xl'>
								Log-in or sign up
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SettingUp;
