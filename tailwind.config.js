/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                lightgreen: '#A0F901',
                secondary: '#D3D3D3',
            },
            fontFamily: {
                montserrat: ['Montserrat', 'sans-serif'],
                grotesk: ['Craftwork Grotesk', 'sans-serif'],
            },
            backgroundImage: {
                'hero-pattern': "url('/public/img/first-bg.png')",
                'mobile-hero-pattern': "url('/public/img/mobile-BG.png')",
                main: "url('/public/img/main-bg.png')",
                'main-mobile': "url('/public/img/main-mobile-bg.png')",
            },
        },
    },
    plugins: [],
};
