module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  // darkMode: 'media',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#B268FF',
          faded: '#985CD688',

          // https://hihayk.github.io/scale/#4/4/30/80/-5/5/20/14/B268FF/178/104/255/white
          50: '#EDDEFF',
          100: '#DCBEFF',
          200: '#CDA0FF',
          300: '#BF83FF',
          400: '#B268FF',
          500: '#A85EEC',
          600: '#9D54D9',
          700: '#924BC6',
          800: '#8741B3',
        },
        secondary: {
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
        }
      },
      fontFamily: {
        primary: ['"DM Sans"', 'sans-serif'], // or Fira Sans?
        heading: ['"Outfit"', 'sans-serif'], // DM Sans, Be Vietnam Pro, Roboto Slab, Outfit
      },
      animation: {
        'moving-bg': 'movingBackground 6s ease infinite',
        'slow-panning': 'infinitePanning 400s linear infinite',
      },
      keyframes: {
        movingBackground: {
          '0%': {backgroundPosition: '0% 50%'},
          '50%':{backgroundPosition: '100% 50%'},
          '100%':{backgroundPosition: '0% 50%'}
        },
        infinitePanning: {
          '0%': {transform: 'translateX(-50%)'},
          // '50%':{transform: 'translateX(0%)'},
          '100%':{transform: 'translateX(0%)'}
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
