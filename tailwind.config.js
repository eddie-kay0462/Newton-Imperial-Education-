/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4fa',
          100: '#e1e9f5',
          300: '#7fa7d6',
          500: '#5b8ac2', // moderate blue
          600: '#4a7bb8', // slightly darker
          700: '#3d6ba8', // balanced dark blue
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
        }
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 