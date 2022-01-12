module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  // darkMode: 'media',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00CDF5',
          faded: '#5CC2D688',

          // https://hihayk.github.io/scale/#4/4/30/80/-5/5/20/14/00CDF5/0/205/245/white
          50: '#CCFDFF',
          100: '#99F7FF',
          200: '#66EDFF',
          300: '#33DFFC',
          400: '#00CDF5',
          500: '#00BBE7',
          600: '#00AAD8',
          700: '#0099C6',
          800: '#0087B3',
        },
        secondary: {
          DEFAULT: '#B268FF',
          faded: '#985CD688'
        }
      },
      fontFamily: {

      },
      animation: {
        'moving-bg': 'movingBackground 8s ease infinite',
      },
      keyframes: {
        movingBackground: {
          '0%': {backgroundPosition: '0% 50%'},
          '50%':{backgroundPosition: '100% 50%'},
          '100%':{backgroundPosition: '0% 50%'}
        }
      },
      backgroundSize: {
        'oversize': '200% 200%'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
