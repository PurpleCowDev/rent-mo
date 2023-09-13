import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/'
//Remove error on import when using TS by adding ignore pattern on eslintrc.cjs
export default defineConfig({
	plugins: [react()],
	server: {
		proxy: {
			'/api/v1': {
				target: 'http://localhost:5000',
				changeOrigin: true,
				secure: false,
				ws: true,
			},
		},
	},
});
