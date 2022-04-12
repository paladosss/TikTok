import adapter from '@sveltejs/adapter-auto';

const config = {
	kit: {
		adapter: adapter(),
		vite: {
			server: {
				hmr: {
					protocol: 'ws',
					port: 3000
				}
			}
		}
	},
};

export default config;
