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
          200: '#c3d7e8',
          300: '#95b8d1',
          400: '#5a8ab3',
          500: '#0F2A44', // main dark blue
          600: '#0F2A44', // consistent dark blue
          700: '#0a1f33', // darker shade
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
        },
        gray: {
          25: '#fafbfc', // very light gray for backgrounds
        }
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 