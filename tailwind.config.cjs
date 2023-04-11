/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ['./views/**/*.pug'],
  theme: {
    extend: {
      colors: {
        "dark-pink": "#B38192",
        "light-pink": "#FFABC8",
      }
    },
  },
  plugins: [],
}
