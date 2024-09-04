/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}" 
  ],
  theme: {
    extend: {
      colors: {
        brblue: '#03a0d8',
        brgreen: '#1DEB88',
        brdarkgreen: '#02100a',
        braccent: '#bac7a7',
        brwhite: '#f6fff9',
        brorange: "#F37935",
        brorbg: "hsl(21, 49%, 58%)"
      },
      screens: {
        xsm:'460px'
      },
      
    },
  },
  plugins: [],
}