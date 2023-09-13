/** @type {import('tailwindcss').Config} */

const withMT = require('@material-tailwind/react/utils/withMT');
module.exports = withMT({
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			boxShadow: {
				searchbox: 'var(--searchbox-shadow)',
				buttonbox: 'var(--buttonbox-shadow)',
			},
			fontFamily: {
				'Messina-Sans': ['Messina Sans', 'sans-serif'],
			},

			colors: {
				yellow: 'var(--yellow-0)',
				yellow100: 'var(--yellow-100)',
				yellow200: 'var(--yellow-200)',
				yellow300: 'var(--yellow-300)',
				yellow400: 'var(--yellow-400)',
				yellow500: 'var(--yellow-500)',
				yellow600: 'var(--yellow-600)',
				yellow700: 'var(--yellow-700)',
				yellow800: 'var(--yellow-800)',
				yellow900: 'var(--yellow-900)',

				dark900: 'var(--dark-900)',
				dark800: 'var(--dark-800)',
				dark700: 'var(--dark-700)',
				dark600: 'var(--dark-600)',
				dark500: 'var(--dark-500)',
				dark400: 'var(--dark-400)',
				dark300: 'var(--dark-300)',
				dark200: 'var(--dark-200)',
				dark100: 'var(--dark-100)',
			},
		},
	},
});
