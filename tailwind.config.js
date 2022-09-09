/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        body: 'Poppins'
      },
      maxWidth: {
        laptop: '1440px'
      }
    },
  },
  plugins: [],
}
