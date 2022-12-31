/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{html,js,tsx, ts}",
    "./node_modules/flowbite/**/*.js",
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    colors: {
      "grey": "#3D3D3D",
      "dark": "#0f172a",
      "lite-dark": "#334155",
      "grey-light": "#565656",
      "dark-mint": "#84AB80",
      "mint": "#B2FFA9",
      "rich-blue": "#07393C",
      "dark-blue": "#2C666E",
      "light-blue": "#90DDF0",
      "white": "#F0EDEE",
      "black": "#0A090C"
    },
    extend: {},
  },
  plugins: [
      require('flowbite/plugin'),
      require('tw-elements/dist/plugin')
  ],
}
