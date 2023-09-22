/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    './index.html'
  ],
  theme: {
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.333rem',
      '2xl': '1.777rem',
      '3xl': '2.369rem',
      '4xl': '3.157rem',
      '5xl': '4.209rem',
    },
    extend: {
      fontFamily: {
        sans: ['Inclusive Sans', ...defaultTheme.fontFamily.sans],
        mono: ['Fira Code', ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [],
}

