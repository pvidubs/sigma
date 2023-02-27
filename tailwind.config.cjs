/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        fontFamily: {
            poppins: ['Poppins', 'sans-serif'],
            archivo: ['Archivo', 'sans-serif'],
            bahnschrift: ['Bahnschrift', 'sans-serif'],
        },
        extend: {
            colors: {
                sigma: '#1183ea',
                olive: {
                    100: '#edf5d4',
                    200: '#c2d199',
                    300: '#8cb059',
                    400: '#30590a',
                },
                green: {
                    100: '#ccede9',
                    200: '#82c9c9',
                    300: '#2eab9e',
                    400: '#005454',
                },
                blue: {
                    100: '#bae0fa',
                    200: '#73baeb',
                    300: '#0d66a8',
                    400: '#003d75',
                },
                copper: {
                    100: '#f7dec4',
                    200: '#f09c40',
                    300: '#bf6b0d',
                    400: '#914a05',
                },
                gray: {
                    100: '#dcdcdc',
                    200: '#959595',
                    300: '#595959',
                    400: '#333333',
                },
            },
            backgroundImage: {
                banner: "url('/src/assets/images/img-3.jpg')",
            },
        },
    },
    plugins: [],
};

