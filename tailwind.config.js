const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        "sans": ["Prata", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}

