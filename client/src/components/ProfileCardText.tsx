import React from 'react';

interface ProfileCardTextProps {
	image: string;
	text: string;
}

const ProfileCardText = ({ text, image }: ProfileCardTextProps) => {
	return (
		<div className='flex items-center w-full gap-1'>
			<img
				className='h-8'
				src={image}
				alt='logo'
			/>
			<p className='block p-2 w-3/4 no-select'>{text}</p>
		</div>
	);
};

export default ProfileCardText;
