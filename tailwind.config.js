/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        '1000': '1000px', // Custom breakpoint cho 720px
        '1090': '1090px', // Custom breakpoint cho 720px
      },
    },
  },
  plugins: [],
}