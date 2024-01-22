import ViteRestart from 'vite-plugin-restart';
import * as path from 'path';

/** @type {import('vite').UserConfig} */
export default ({ command }) => ({
  base: command === 'serve' ? '' : '/dist/',
  publicDir: './src/public',
  build: {
    manifest: true,
    outDir: './public_html/dist',
    rollupOptions: {
      input: {
        app: './src/js/app.js',
      },
    },
  },
  server: {
    fs: {
      strict: false,
    },
    origin: 'http://localhost:3000',
    port: 3000,
    strictPort: true,
  },
  plugins: [
    ViteRestart({
      reload: ['./templates/**/*'],
    }),
  ],
	resolve: {
		alias: {
			'@sass': path.resolve(__dirname, 'src/sass'),
			'@css': path.resolve(__dirname, 'src/css'),
		}
	}
});
