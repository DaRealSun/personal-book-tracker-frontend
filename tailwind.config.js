/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // etc.
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}
