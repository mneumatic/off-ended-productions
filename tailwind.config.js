/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./css/*.css", "./js/*.js", "./js/components/*.js"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          md: '0'
        }
      }
    },
  },
  plugins: [],
}

