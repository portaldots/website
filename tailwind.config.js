const tailwindTypography = require('@tailwindcss/typography')

module.exports = {
  mode: 'jit',
  purge: ['./components/**/*.vue', './pages/**/*.vue', './content/**/*.md'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [tailwindTypography],
}
