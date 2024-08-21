/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ['./*'],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }.
    },
    container: {
      center: true,
    },
    fontFamily: {
      sans: [
        "Jost",
      ],
      serif: [
        "Playfair Display",
      ],
      cursive: [
        "Satisfy",
      ]
    },
    extend: {
      colors: {
        bgColor: {
          bg: "#121316",
        },
        color: {
          primary: "#E8604C",
        },
      }
      ,
    },
  },
  plugins: [],
};

