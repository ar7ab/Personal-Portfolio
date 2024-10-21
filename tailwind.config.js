/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable dark mode based on a class
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
      },
      animation: {
        'slide-x': 'slide-x 5s ease-in-out infinite',
      },
      keyframes: {
        'slide-x': {
          '0%, 100%': { transform: 'translateX(-20px)' },
          '50%': { transform: 'translateX(20px)' },
        },
      },
      colors: {
        // Light Mode Colors
        primary: '#1D1B20',
        secondary: '#6439FF',
        background: '#FEF5FF',

        // Dark Mode Colors 
        'dark-primary': '#E7E1EA',
        'dark-secondary': '#6439FF',
        'dark-background': '#131217',
      },
    },
  },
  plugins: [],
}
