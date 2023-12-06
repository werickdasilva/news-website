/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundColor: {
				body: '#F1F2F3',
				card: '#C31815',
				'card-light': '#F6DDDC',
				footer: '#0E1E32',
			},
			borderColor: {
				btn: '#C31815',
				input: '#141414'
			},
			textColor: {
				primary: '#2A2A2A',
				second: '#C31815',
				input: '#141414'
			},
			fontFamily: {
				ibm: ['IBM Plex Serif', 'serif'],
				poppins: ['Poppins', 'serif'],
				nunito: ['Nunito', 'serif'],
				montserrat: ['Montserrat', 'serif'],
			},
			boxShadow: {
				card: '0px 2px 14px rgba(42, 42, 42, 0.24)'
			}
		},
	},
	plugins: [],
}
