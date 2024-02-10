/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './views/**/*.pug', 
    './src/js/*.js', 
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  darkMode: "class",
  plugins: [require("tw-elements/dist/plugin.cjs")],
  theme: { },
}
