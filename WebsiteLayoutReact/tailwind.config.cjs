/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        eurostile_400: ["Eurostile-400", "sans-serif"],
        eurostile_500: ["Eurostile-500", "sans-serif"],
        eurostile_700: ["Eurostile-700", "sans-serif"],
        ddt_400: ["DDT-400", "sans-serif"],
        robotoFlex_400: ["RobotoFlex-400", "sans-serif"],
      },
    },
  },
  plugins: [],
};
