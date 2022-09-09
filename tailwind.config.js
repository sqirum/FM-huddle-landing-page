/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        body: 'Poppins'
      },
      maxWidth: {
        laptop: '1440px',
        logo: '200px'
      },
      backgroundImage: {
        mobile: 'url("/images/bg-mobile.svg")',
        desktop: 'url("/images/bg-desktop.svg")'
      },
      backgroundColor: {
        purple: '#684BB1',
        pink: '#E880E8'
      },
      textColor: {
        purple: '#684BB1',
        pink: '#E880E8'
      }
    },
  },
  plugins: [],
}
