const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Estedad', ...defaultTheme.fontFamily.sans],
        lalezar: 'Lalezar',
      },
    },
  },
  plugins: [
    require('tailwindcss-rtl'),
  ],
}
