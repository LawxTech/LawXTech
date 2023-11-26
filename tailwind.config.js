const autoprefixer = require("autoprefixer");
const tailwindcss = require("tailwindcss");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.html",
    "./src/**/*.jsx",
    "./src/**/*.js",
    "./src/**/*.tsx",
    "./src/**/*.ts",
  ],
  theme: {
    extend: {},
  },
  plugins: [tailwindcss(), autoprefixer()],
};
