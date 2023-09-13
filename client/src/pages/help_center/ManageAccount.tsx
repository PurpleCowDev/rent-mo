import React from 'react';
import Navbar from '../../components/Navbar.tsx';

const ManageAccount = () => {
	return (
		<div className=' font-Messina-Sans'>
			<div className='flex flex-col w-full h-fit pb-20 bg-cover bg-no-repeat'>
				<Navbar />
				<div className='absolute w-full h-32 bg-gradient-to-br from-dark700 to-dark900 -z-10'></div>
			</div>
			<div className='flex flex-col items-center justify-center w-full h-full'>
				<h1 className='py-0 text-xl font-bold text-dark900'>Hi! Need help?</h1>
				<div className='w-full h-fit flex relative items-center justify-center self-center '>
					{/* Search bar */}
					<input
						type='text'
						placeholder='Search how-tos and more...'
						className='p-3 mt-4 border bg-dark400 border-dark400 rounded-full w-full max-w-md placeholder-dark900'
					/>
				</div>
			</div>

			<div className='flex lg:flex-row flex-col-reverse justify-center p-10 items-start'>
				{/* Left Content */}
				<div className='md:px-16 px-4 flex flex-col gap-2 w-full'>
					<h2 className='font-bold lg:text-2xl text-lg mt-0'>How to Manage Your User Account</h2>
					<p className='lg:text-base text-sm'>
						Efficiently managing your user account ensures that your information is up-to-date and your experience is
						tailored to your preferences. Follow these steps to make the most out of your account:
					</p>
					<h2 className='font-bold lg:text-2xl text-lg mt-2'>1. Log In To Your Account</h2>
					<p className='lg:text-base text-sm'>
						Begin by logging in to your user account using your provided credentials. If you've forgotten your password,
						you can request a password reset via email.
					</p>
					<h2 className='font-bold lg:text-2xl text-lg mt-2'>2. Navigate to Account Settings</h2>
					<p className='lg:text-base text-sm'>
						Once logged in, locate the "Account Settings" or "Profile" section. This is accessible through the menu in
						the navigation bar.
					</p>
					<h2 className='font-bold lg:text-2xl text-lg mt-2'>3. Review Your Account Information</h2>
					<p className='lg:text-base text-sm'>
						Take a moment to review the existing information associated with your account. This includes your name,
						email address, and contact details. Ensure that this information is accurate and up-to-date.
					</p>
					<h2 className='font-bold lg:text-2xl text-lg mt-2'>4. Update Personal Details</h2>
					<p className='lg:text-base text-sm'>
						If you've moved, changed your email address, or updated your phone number, this is the place to make those
						changes. Update any outdated or incorrect information to ensure that you can be reached when needed.
					</p>
					<h2 className='font-bold lg:text-2xl text-lg mt-2'>5. Personalize Your Profile Picture</h2>
					<p className='lg:text-base text-sm'>
						Add a personal touch to your account by uploading or changing your profile picture. A profile picture can
						help others recognize you and make your account feel more welcoming.
					</p>
					<h2 className='font-bold lg:text-2xl text-lg mt-2'>6. Customize Notification Preferences</h2>
					<p className='lg:text-base text-sm'>
						We allow you to customize how and when you receive notifications. Tailor these settings to align with your
						communication needs—whether you prefer email, in-app notifications, or both.
					</p>
					<h2 className='font-bold lg:text-2xl text-lg mt-2'>7. Set Language Preferences</h2>
					<p className='lg:text-base text-sm'>
						Ensure that the language is set according to your preferences. This ensures that you can easily navigate and
						understand the content presented to you.
					</p>
					<h2 className='font-bold lg:text-2xl text-lg mt-2'>8. Save Your Changes</h2>
					<p className='lg:text-base text-sm'>
						After making any desired updates, be sure to click the "Save" or button to confirm your changes. This
						ensures that your preferences are reflected across the platform.
					</p>
					<h2 className='font-bold lg:text-2xl text-lg mt-2'>Enhancing Your Account's Security</h2>
					<p className='lg:text-base text-sm'>
						Maintaining the security of your account is crucial. Follow these practices to keep your account safe from
						unauthorized access:
					</p>
					<ol className='list-decimal pl-10'>
						<li>Enable Two-Factor Authentication (2FA)</li>
						<li>Monitor Devices</li>
						<li>Use Strong Passwords</li>
						<li>Keep Information Private</li>
					</ol>

					<h2 className='font-bold lg:text-2xl text-lg mt-2'>Changing Your Account Password</h2>
					<p className='lg:text-base text-sm'>If you need to update your account password, follow these steps:</p>
					<ol className='list-decimal pl-10'>
						<li>Log in to your account</li>
						<li>Navigate to the "Password" section</li>
						<li>Follow the prompts to enter your current password and your new, strong password</li>
						<li>Click "Change Password" or a similar option to finalize the update</li>
					</ol>
					<br />
					<p className='lg:text-base text-sm'>
						Remember, managing your user account ensures a personalized and secure experience on the platform. If you
						encounter any difficulties or have questions, don't hesitate to reach out to the platform's support
						team—they're there to assist you every step of the way.
					</p>
					<div className='mt-8'>
						<hr className='w-full border-gray-500 mx-auto' />{' '}
					</div>

					<h2 className='font-bold lg:text-2xl text-lg mt-2'>Related Articles</h2>
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
					<a className='font-bold text-xl ' href='/setting-up'>
						<u>Setting up your account</u>
					</a>
					<p className='lg:text-base text-sm'>
						You’ve logged in, but you need to edit your account. Where do you go? Here’s how to update your profile,
						manage notification settings, and more.
					</p>
					{/* Add more content here */}
				</div>

				{/* Right Content */}
				<div className='lg:self-start self-center'>
					<div className='w-full bg-white rounded-lg border border-dark400 p-10 mb-8 items-center justify-center'>
						<div className='flex flex-col'>
							<p className='font-semibold text-xl text-dark900'>Get help with your reservations, account, and more.</p>
							<a href='/login' className='px-4 py-2 bg-yellow100 mt-3 text-white rounded-xl w-fit self-end'>
								Log-in or sign up
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ManageAccount;
