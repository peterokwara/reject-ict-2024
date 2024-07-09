/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#EF4923',

					secondary: '#e396d9',

					accent: '#d970c4',

					neutral: '#221812',

					'base-100': '#fcf8fd',

					info: '#4dd4ff',

					success: '#00fbcb',

					warning: '#ffc800',

					error: '#ff7f93'
				}
			}
		]
	},
	plugins: [daisyui]
};
