const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'sans': ['Plus Jakarta Sans', ...defaultTheme.fontFamily.sans],
      'serif': ['Libre Baskerville', ...defaultTheme.fontFamily.serif],
      'mono': ['monospace', ...defaultTheme.fontFamily.mono],
    },
    extend: {
      colors:{
        clay:{
          50:  '#fbfbf9',
          100: '#f4f2ee',
          200: '#eceae2',
          300: '#d9d4c5',
          400: '#98948a',
          500: '#6d6a63',
          600: '#57554f',
          700: '#41403b',
          800: '#2b2a27',
          900: '#161514'
        },
        silver:{
          50: '#fbfaf8',
          100: '#f5f1ed',
          200: '#f2ede9',
          300: '#dad5d2',
          400: '#a9a6a3',
          500: '#797775',
          600: '#615f5d',
          700: '#494746',
          800: '#302f2f',
          900: '#181817'
        },
        mustard: {
          50: '#fef7e9',
          100: '#fceed4',
          200: '#fadda9',
          300: '#f7cd7d',
          400: '#f6c468',
          500: '#f2ab27',
          600: '#c2891f',
          700: '#916717',
          800: '#614410',
          900: '#49330c'
        }
      }
    },
  },
  plugins: [],
}