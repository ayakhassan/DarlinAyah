/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", 
    "./pages/**/*.{js,ts,jsx,tsx}", 
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        cursive: ["'Dancing Script', cursive"],
      },
      colors: {
        pink: {
          100: '#fff1f2',
          200: '#ffe4e6',
          300: '#fbcfe8',
          500: '#ec4899',
          600: '#db2777',
        },
      },
    },
  },
  plugins: [],
};
