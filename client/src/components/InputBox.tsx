import React from 'react';

interface InputBoxProps {
	placeholder: string;
	type: string;
}

export const InputBox = ({ placeholder, type }: InputBoxProps) => {
	return (
		<input
			placeholder={placeholder}
			type={type}
			className='sm:w-1/2 w-full focus:outline-none py-3 px-3 text-sm leading-none text-dark700 bg-white border rounded border-dark500'
		/>
	);
};
