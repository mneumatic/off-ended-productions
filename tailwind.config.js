/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./views/partials/*.ejs",
    "./views/admin/*.ejs",
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
        }
      },
    },
  },
  plugins: [],
}

