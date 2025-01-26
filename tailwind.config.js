/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./templates/layouts/*.gohtml",
    "./templates/pages/*.gohtml",
    "./templates/partials/*.gohtml",
    "./public/css/*.css",
    "./public/js/*.js"
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          md: '0'
        }
      },
    },
    colors: {
      white: '#f2f0ef',
      black: '#000000',
    }
  },
  plugins: [],
}

