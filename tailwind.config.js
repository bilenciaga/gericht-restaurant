const plugin = require('tailwindcss/plugin')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cormorant: ['Cormorant Upright', 'serif'],
        opensans:['Open Sans', 'sans-serif'],
       },
      backgroundImage:{
        'bg-image' : "url('C:/Users/Nguyen Hoai Trung/Desktop/react/gericht-restaurant/src/assets/bg.png')",
      }
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities({
        '.no-scrollbar::-webkit-scrollbar': {
          'display': 'none',
        },
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
        '.content-visible': {
          'content-visibility': 'visible',
        },
      })
    })
  ]
}