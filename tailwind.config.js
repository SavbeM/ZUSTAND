/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{html,js,tsx, ts}",

  ],
  theme: {
    colors: {
      "grey": "#3D3D3D",
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
      require('flowbite/plugin')
  ],
}
