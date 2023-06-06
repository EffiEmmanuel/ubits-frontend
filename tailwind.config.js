/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        ubtisDarkBlue: "#092037",
        ubtisLightBlue: "#B4CCFE",
      },
      textColor: {
        ubtisDarkBlue: "#092037",
        ubtisLightBlue: "#B4CCFE",
      },
      borderColor: {
        ubtisDarkBlue: "#092037",
        ubtisLightBlue: "#B4CCFE",
      },
    },
  },
  plugins: [],
};
