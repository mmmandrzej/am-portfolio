/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bottleGreen: '#4a6f54',    // my accent color
        darkBlue: '#1e293b',       // dark mode background
      },
    },
  },
  plugins: [],
};
