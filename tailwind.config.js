/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './app/**/*.{js,ts,jsx,tsx}',
        './lib/**/*.tsx',
    ],
    theme: {
        extend: {
            fontFamily: {
                yellowtail: ['Yellowtail', 'cursive', 'sans-serif'],
            },
            height: {
                100: '32rem',
            },
        },
    },
    plugins: [require('@tailwindcss/line-clamp')],
};
