/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#dd2c00', // Industrial Red
          dark: '#b90000',
        },
        secondary: {
          DEFAULT: '#1a1a1a', // Black
          light: '#333333',
        },
        accent: {
          DEFAULT: '#ffb300', // Gold / Orange accent
        }
      },
      fontFamily: {
        heading: ['"Montserrat"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
