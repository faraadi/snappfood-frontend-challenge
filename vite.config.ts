import * as path from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react({ include: /\.(jsx|ts|tsx)$/ }),
	],
	build: {
		emptyOutDir: true,
	},
	publicDir: path.resolve(__dirname, 'public'),
	server: {
		port: 3000,
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
		},
	},
});
