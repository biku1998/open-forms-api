const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        tagGrayBg: '#e3e3e3',
        tagGrayText: '#333',
        tagRedBg: '#F6D8E2',
        tagRedText: '#821D32',
        tagGreenBg: '#D0EDEA',
        tagGreenText: '#29534D',
        tagBlueBg: '#d4e7ff',
        tagBlueText: '#0D4E9A',
        orange: '#ff725e',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
