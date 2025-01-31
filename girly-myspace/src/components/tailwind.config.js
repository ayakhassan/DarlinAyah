module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        fontFamily: {
          cursive: ["'Dancing Script', cursive"],
        },
        colors: {
          pink: {
            100: '#fff1f2',
            200: '#ffe4e6',
            500: '#ec4899',
            600: '#db2777',
          }
        },
        animation: {
          bounce: 'bounce 2s infinite',
        }
      },
    },
    plugins: [],
  }