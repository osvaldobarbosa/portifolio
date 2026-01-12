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
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        background: '#09090b', // zinc-950
        surface: '#18181b', // zinc-900
        primary: '#fafafa', // zinc-50
        secondary: '#a1a1aa', // zinc-400
        accent: '#6366f1', // indigo-500
      }
    }
  },
  plugins: [],
}