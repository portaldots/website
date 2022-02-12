const tailwindTypography = require('@tailwindcss/typography')
const plugin = require('tailwindcss/plugin')

module.exports = {
  mode: 'jit',
  purge: ['./components/**/*.vue', './pages/**/*.vue', './content/**/*.md'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              wordBreak: 'break-all',
            },
            h2: {
              borderTopColor: theme('colors.gray.200'),
              borderTopWidth: '1px',
              paddingTop: '2rem',
              marginTop: '4rem',
              marginBottom: '2rem',
            },
            h3: {
              marginTop: '3rem',
              fontWeight: 'bold',
            },
            strong: {
              fontWeight: 'bold',
            },
            'strong a': {
              fontWeight: 'bold',
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
              borderColor: theme('colors.gray.200'),
              borderWidth: '1px',
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    tailwindTypography,
    plugin(
      ({ addUtilities, theme, e }) => {
        const values = theme('colCount')

        const utilities = values.map((value) => {
          return {
            [`.${e(`col-count-${value}`)}`]: { columnCount: `${value}` },
          }
        })

        addUtilities(utilities)
      },
      {
        theme: {
          colCount: [2],
        },
      }
    ),
  ],
}
