const tailwindTypography = require('@tailwindcss/typography')

module.exports = {
  mode: 'jit',
  purge: ['./components/**/*.vue', './pages/**/*.vue', './content/**/*.md'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h2: {
              borderTopColor: theme('colors.gray.200'),
              borderTopWidth: '1px',
              paddingTop: '2rem',
              marginTop: '4rem',
              marginBottom: '2rem',
            },
            code: {
              '&::before, &::after': {
                display: 'none',
              },
            },
            img: {
              width: '100%',
              maxWidth: '500px',
              marginLeft: 'auto',
              marginRight: 'auto',
              borderRadius: '0.25rem',
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [tailwindTypography],
}
