module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          700: '#047857', // Darker green for CTA section
        }
      }
    },
  },
  plugins: [],
}