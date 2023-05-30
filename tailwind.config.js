/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      md: "768px",
      lg: "1280px",
    },
    colors: {
      brand: "#0059BC",
      navy: "#00254F",
    },
    extend: {},
  },
  plugins: [],
};
