/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ["**/**/*.{html,js}"],
  theme: {
    fontSize: {
      sm: ["11.3px","15.4px"],
      base: ["16px","21.8px"],
      xl: ["23px","31.3px"],
      "2xl": ["32px","42.7px"],
      "3xl": ["45px","60px"],
      "4xl": ["64px","80px"],
      "5xl": ["91px","114px"]
    },
    colors: {
      "primary":"#500B82",
      "secondary":"#C409E3",
      "black": {
        "100":"#252228",
        "75":"#58555a",
        "50":"#929194",
        "25":"#f1f1f1",
        "10":"#eae9ea",
        "5":"#f4f4f4"
      },
      "gray": colors.gray,
      "amber": colors.amber,
      "violet": colors.violet,
      "error":"#CC544C"
    },
    extend: {
      
    },
  },
  plugins: [],
}
