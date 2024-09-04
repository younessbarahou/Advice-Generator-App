/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./all/*.html"],
  theme: {
    extend: {
      backgroundColor:{
        neutral: {
          500: 'hsl(217, 19%, 38%)',
          700: 'hsl(217, 19%, 24%)',
          900: 'hsl(218, 23%, 16%)'
        },
        primary: {
          500: 'hsl(193, 38%, 86%)',
          700: 'hsl(150, 100%, 66%)'
        }
      },
      textColor: {
        primary: {
          500: 'hsl(193, 38%, 86%)',
          700: 'hsl(150, 100%, 66%)'
        }
      },
      fontFamily: {
        main: ['Manrope, system-ui']
      },
      maxWidth: {
        main: '78%'
      },
      width: {
        ls: '30rem'
      },
      boxShadowColor: {
        neon: 'hsl(150, 100%, 66%)'
      }
    },
  },
  plugins: [],
}

