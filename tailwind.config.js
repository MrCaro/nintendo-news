/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: [
          'RO Spritendo',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'Liberation Mono',
          'Courier New',
          'monospace',
        ],
      },
      colors: {
        grape: colors.purple,
        nintendoRed: {
          500: '#e60213',
          600: '#b40213',
          700: '#860213',
        },
        nintendoOrange: {
          500: '#ffa103',
          600: '#c8a103',
          700: '#b4A103',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}
