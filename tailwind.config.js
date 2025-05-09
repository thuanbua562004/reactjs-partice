

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text-main': '#666666',
        'color-main': '#08cc7f',
        'color-second': '#F9A8D4',
        'color-dark':'#6B7280 '
      },
    },
  },
  plugins: [],
}
