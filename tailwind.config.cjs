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
        primary: '#0D47A1',
        secondary: '#1565C0',
        background: '#FEFAE0',
        bodytext: '#DDA15E',
        accent: '#FF6D00'
      }
    }
   },
}
