/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#070724",
        "dark-grey": "#38384f",
        "light-grey": "#838391",
        main: "var(--main)",
      },
      fontFamily: {
        "league-spartan": "League Spartan, sans-serif",
        antonio: "Antonio, sans-serif",
      },
    },
  },
  plugins: [],
};
