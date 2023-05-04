module.exports = {
	mode: 'jit',
	content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkmode: 'class',
	theme: {
		extend: {
			colors: {
				gray: {
					900: '#202225',
					800: '#2f3136',
					700: '#36393f',
					600: '#4f545c',
					400: '#d4d7dc',
					300: '#e3e5e8',
					200: '#ebedef',
					100: '#f2f3f5',
				},
			},
			FontFamily: {
				body: ['Roboto'],
			},
			backgroundImage: (theme) => ({
				homeBack: "url('/src/assets/img/umberto-jXd2FSvcRr8-unsplash.jpg')",
			}),
			screens: {
				'3xl': '1600px',
			},
			listStyleImage: (theme) => ({
				checkmark: "('src/assets/img/checkmark.jpg')",
			}),
		},
	},
	plugins: [require('@tailwindcss/aspect-ratio')],
};
