import React, { useEffect, useState } from 'react';
import carIcon from '../assets/sprites/camaro_PNG20.png';
import carIcon2 from '../assets/sprites/loading.gif';

const LoadingText: React.FC = () => {
	const loadingText = ' Loading...';
	const [displayText, setDisplayText] = useState('');

	useEffect(() => {
		let currentIndex = 0;
		const interval = setInterval(() => {
			if (currentIndex === loadingText.length - 1) {
				setDisplayText('');
				currentIndex = 0;
			} else {
				setDisplayText((prevText) => prevText + loadingText[currentIndex]);
				currentIndex++;
			}
		}, 250); // Adjust the interval for the text animation

		return () => clearInterval(interval);
	}, []);

	return <p className='text-white'>{displayText}</p>;
};

const LoadingPage: React.FC = () => {
	const loadingPageStyle: React.CSSProperties = {
		display: 'flex',
		justifyContent: 'flex-end',
		alignItems: 'center',
		width: '100vw',
		height: '100vh',
		backgroundColor: 'dark900',
		overflow: 'hidden',
		zIndex: 1000,
		position: 'fixed',
	};

	const carStyle: React.CSSProperties = {
		width: '500px',
		animation: 'sprint 3s linear infinite',
		transform: 'translateX(100vw)',
	};

	const keyframes = `@keyframes sprint {
    from {
        transform: translateX(-2000px);
    }
    to {
        transform: translateX(100vw);
    }
  }`;

	return (
		<div style={loadingPageStyle}>
			<style>{keyframes}</style>
			<div>
				<div className='text-white flex relative -translate-x-full'>
					{' '}
					<LoadingText />
				</div>
				<img src={carIcon2} alt='Sprinting Car' style={carStyle} />
			</div>
		</div>
	);
};

export default LoadingPage;
