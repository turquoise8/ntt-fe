/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      md: "640px",
      lg: "1280px",
    },
    colors: {
      brand: "#0059BC",
      navy: "#00254F",
      customGray: "#89919A",
      ...colors,
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
