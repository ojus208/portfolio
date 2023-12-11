/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./app/**/*.{js,ts,jsx,tsx}",
    "all"
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '32px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '8xl': ['96px', '106px']
    },
    extend: {
      fontFamily: {
        palanquin: ['Montserrat', 'sans-serif'],
        montserrat: ['Palanquin', 'sans-serif'],
        logo: ['Skranji', 'sans-serif'],
      },
      colors: {
        'primary': "#ECEEFF",
        "slate-gray": "#6D6D6D",
        'blue-3':'#03045e',
        'white-1':"rgba(255,255,255,0.1)",
        'offwhite': 'rgb(255,255,255)'
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
      backgroundImage: {
        'intro': "url('asset/images/bg3.png')",
        
      },
      screens: {
        "wide": "1440px"
      }
    },
  },
  plugins: [],
}