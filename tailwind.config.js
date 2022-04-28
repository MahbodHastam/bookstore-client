const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      fontFamily: {
        sans: ['Estedad', ...defaultTheme.fontFamily.sans],
        lalezar: 'Lalezar',
      },
      colors: {
        primary: colors.blue,
      },
    },
  },
  plugins: [
    require('tailwindcss-rtl'),
  ],
}
