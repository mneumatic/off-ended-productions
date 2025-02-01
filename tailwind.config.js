/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./views/partials/*.ejs",
    "./views/*.ejs",
    "./public/css/*.css",
    "./public/js/*.js"
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          xl: '0'
        }
      },
    },
  },
  plugins: [],
}

