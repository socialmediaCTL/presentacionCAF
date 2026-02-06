/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            screens: {
                'landscape-sm': { 'raw': '(max-height: 500px)' },
            },
            colors: {
                brand: {
                    yellow: '#FFC300',
                    black: '#0a0a0a',
                    gold: '#FFD700',
                }
            },
            animation: {
                'ken-burns': 'ken-burns 20s ease infinite alternate',
            },
            keyframes: {
                'ken-burns': {
                    '0%': { transform: 'scale(1) translate(0, 0)' },
                    '100%': { transform: 'scale(1.1) translate(-2%, -2%)' },
                }
            }
        },
    },
    plugins: [],
}
