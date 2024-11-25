const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        sky: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        shakeSlow:{
         '0%':{transform : "translateX(0)"},
         '50%':{transform : "translateX(30px)"},
         '100%':{transform :"translateX(0)"}
        },
        shakeSlowUp:{
          '0%':{transform : "translateY(0)"},
          '50%':{transform : "translateY(-30px)"},
          '100%':{transform :"translateY(0)"}
         },
         revolveDisappear:{
          '0%':{transform : "rotate(0)"},
          '90%':{transform : "rotateX(90deg)"},
          '100%':{display : "none", transform : "rotateX(90deg)"}
         },
        slideDown:{
         '0%':{transform : "translateY(-100%)"},
         '100%':{transform : "translateY(0)"}
        },
        slideUp:{
          '0%':{transform : "translateY(100%)"},
          '100%':{transform : "translateY(0)"}
         },
        slideRight:{
        '0%':{transform : "translateX(-100%)"},
        '100%':{transform : "translateX(0)"}
        },
        slideLeft:{
          '0%':{transform : "translateX(100%)"},
          '100%':{transform : "translateX(0)"}
          },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        slideLeftRight:{
          '0%':{transform : 'translateX(0)'},
          '50%':{transform : 'translateX(20px)'},
          '100%':{transform : 'translateX(0)'}
        },
        slideUpDown:{
          '0%':{transform : 'translateY(0)'},
          '50%':{transform : 'translateY(20px)'},
          '100%':{transform : 'translateY(0)'}
        },
        colorChange: {
          '0%': { color: 'black' },      // Starting color (black)
          '50%': { color: 'red' },       // Midway color (red)
          '100%': { color: 'black' },    // Ending color (black)
        },
        colorChange2: {
          '0%': { color: 'gray' },      // Starting color (black)
          '50%': { color: 'white' },       // Midway color (red)
          '100%': { color: 'gray' },    // Ending color (black)
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out ',
        fadeInSlow:"fadeIn 4s ease-in-out",
        fadeOut:'fadeOut 1s ease-in-out',
        bounce: 'bounce 0.5s infinite',
        slideDown:"slideDown 2s ease-in forwards",
        slideUp:"slideUp 2s ease-in forwards",
        slideRight:"slideRight 2s ease-in forwards",
        slideLeft:"slideLeft 2s ease-in forwards",
        colorChange:"colorChange 20s ease-in infinite",
        colorChange2:"colorChange2 20s ease-in infinite",
        shakeSlow:"shakeSlow 2s ease-in forwards",
        shakeSlowUp:"shakeSlowUp 2s ease-in forwards",
        revolveDisappear:"revolveDisappear 2s ease-in forwards",
        slideLeftRight:"slideLeftRight 10s ease-in-out forwards",
         slideUpDown:"slideUpDown 10s ease-in-out forwards"
      },
    
    },
  },
  plugins: [],
});