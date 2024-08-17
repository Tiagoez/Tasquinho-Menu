/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        colors: {
            'green': '#009246',
            'white': '#F1F2F1',
            'red': '#CE2B37',
            'gray-dark': '#273444',
            'gray': '#8492a6',
            'gray-light': '#d3dce6',
        },
        fontFamily: {
            'abeezee': ['ABeeZee', 'sans-serif'],
            'oxygen': ['Oxygen', 'sans-serif']
        },
        extend: {},
    },
    safelist: [
        "hover:bg-green",
        "hover:bg-white",
        "hover:bg-red"
    ],
    plugins: [],
}
