/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'nb-internal': ['NB International Pro Book', 'sans-serif'],
        'rejouice': ['Rejouice Headline', 'sans-serif']

      }
    },
  },
  plugins: [],
}