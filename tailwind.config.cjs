/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './views/**/*.pug', 
    './src/js/*.js', 
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  darkMode: "class",
  plugins: [require("tw-elements/dist/plugin.cjs")],
  theme: {
    extend:{
      colors: {
        primary: '#606C38',
        secondary: '#283618',
        background: '#FEFAE0',
        bodytext: '#DDA15E',
        accent: '#BC6C25'
      }
    }
   },
}
