/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        gold: {
          DEFAULT: '#C2A14D',
          light: '#E6C97A',
          dark: '#8C7A2A'
        },
        'gold-dark': '#8C7A2A',
        'gold-light': '#E6C97A',
        white: '#FFFFFF',
        red: {
          700: '#C41E3A',
          800: '#B01C36',
        },
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        'custom': '0 4px 20px rgba(0, 0, 0, 0.1)',
      },
      backgroundImage: {
        'hero-pattern': 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))',
      },
    },
  },
  plugins: [],
};