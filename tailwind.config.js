/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bgcolor: "#002b36",
        activecol: "#19f9d8",
      },
      screens: {
        lg: "980px",
      },
    },
  },
  plugins: [],
};
