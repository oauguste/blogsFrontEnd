/** @type {import('tailwindcss').Config} */

export default {
  purge: [
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        "10xl": "10rem", // or any other size you desire
        "11xl": "12rem", // another example, adjust as needed
      },
    },
  },
  plugins: [],
};
