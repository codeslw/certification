/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        "dark-primary" : "#4F4F4F",
        "black-primary" : "#333333",
        "dark-secondary" : "#828282",
        "yellow-primary" : "#FFC60B",
        "yellow-secondary" : "#FFC60B"
      }
    },
  },
  plugins: [],
}