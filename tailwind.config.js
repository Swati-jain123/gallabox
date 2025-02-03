/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    flowbite.content(), // Add Flowbite's content paths
  ],
  theme: {
    extend: {
      fontFamily: {
        "battambang": ['Battambang', 'sans-serif'],
        'open-sans':['Open Sans','sans-serif'], 
        'duru-sans':['Duru Sans','serif'], // Adding custom font
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        scroll: "scroll 25s linear infinite", // Adding scroll animation
      },
    },
  },
  plugins: [
    flowbite.plugin(), // Adding Flowbite's plugin
  ],
};
