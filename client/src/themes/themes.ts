import { createTheme } from '@mui/material';

export const theme = createTheme({
	typography: {
		fontFamily: 'Messina Sans',
		fontSize: 12,
	},
	components: {
		MuiInputBase: {
			styleOverrides: {
				root: {
					padding: '2px',
				},
			},
		},
	},
	palette: {
		text: {
			secondary: '#c2c2c2',
		},
	},
});
