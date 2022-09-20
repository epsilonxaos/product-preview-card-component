/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		fontFamily: {
			'monserrat': ['Montserrat', 'serif'],
			'fraunces': ['Fraunces', 'sans-serif']
		},
		colors: {
			'cyangray': '#3c8067'
		}
	},
	plugins: [],
}
