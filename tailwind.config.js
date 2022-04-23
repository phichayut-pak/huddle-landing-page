module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        mobile: '375px',
        desktop: '1440px'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif']
      },
      colors: {
        'lightpink': '#FF52BF',
        'grayish': 'hsl(208, 11%, 55%)',
        'darkcyan': 'hsl(192, 100%, 9%)'
      }
    },
  },
  plugins: [],
}