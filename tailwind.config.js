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
      },
      backgroundImage: {
        mobile: 'url("images/bg-mobile.svg")',
        desktop: 'url("images/bg-desktop.svg")'
      }
    },
  },
  plugins: [],
}
