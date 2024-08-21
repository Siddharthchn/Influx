// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        altivo: ['Altivo', 'sans-serif'], // Use 'Altivo' as the font family name
      },
    },
  },
  plugins: [],
}
