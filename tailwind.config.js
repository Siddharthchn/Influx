/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        altivo: ['Altivo-Black', 'sans-serif'],
        // Add more custom fonts if needed
      },
    },
  },
  plugins: [],
}