/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkgray: 'var(--color-darkgray)',
        shadowgray: 'var(--color-shadowgray)',
      },
    },
  },
  plugins: [],
}

