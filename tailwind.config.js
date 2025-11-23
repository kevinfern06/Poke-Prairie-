/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'retro': ['"Press Start 2P"', 'cursive'],
        'sans': ['Inter', 'sans-serif'],
      },
      colors: {
        'prairie-grass': '#bef264',   // Lime-300
        'prairie-dark': '#14532d',    // Emerald-900
        'prairie-soil': '#a16207',    // Yellow-700
        'prairie-sky': '#bae6fd',     // Sky-200
        'prairie-accent': '#f97316',  // Orange-500
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
      }
    },
  },
  plugins: [],
}