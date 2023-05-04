/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      rotate: {
        135: '135deg',
      },
    },
    screens: {
      sm: '500px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      light: '#F5F5F5',
      dark: '#2A2D2F',
      darkText: '#191919',
      highlight: '#f7ab08',
      darkRings: '#333333',
      blueRings: '#2cdef9',
      darkBase: '#313638',
      textBgLight: '#c8c8c8',
      lightBlueText: '#9becfb',
      darkBlueText: '#004981',
    },
  },
  plugins: [],
};
