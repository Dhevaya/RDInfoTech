/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#280E5C',
      },
      fontFamily: {
        sans: ['Inter'],
      },
      fontSize:{
        base: '1.625rem', // 26px
      }
    },
  },
  plugins: [],
} 