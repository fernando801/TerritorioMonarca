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
    extend: {},
  },
  plugins: [],
}