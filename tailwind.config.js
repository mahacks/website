module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  // darkMode: 'media',
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#000',
          card: '#111827',
          input: '#374151'
        },
        text: {
          DEFAULT: '#fff',
        },
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
        accent: {
          red: '#FF0000',
          green: '#008000',
          blue: '#118DF0',
          orange: '#FFA500'
        },
      },
      fontFamily: {
        primary: ['"Outfit"', 'sans-serif'], // or Fira Sans?
        brand: ['"HELLO DENVER DISPLAY"', 'Outfit', 'sans-serif'],
        'logo-exponent': ['Quark', 'sans-serif'],
        heading: ['"Inter"', 'sans-serif'], // DM Sans, Be Vietnam Pro, Roboto Slab, Outfit
      },
      dropShadow: {
        'glow-white': '0px 0px 8px rgba(255, 255, 255, 0.6)',
        // 'glow-red': '0px 0px 8px rgba(255, 0, 0, 0.8)',
        // 'glow-green': '0px 0px 8px rgba(0, 128, 0, 0.8)',
        // 'glow-blue': '0px 0px 8px rgba(17, 141, 240, 0.8)',
        // 'glow-orange': '0px 0px 8px rgba(255, 165, 0, 0.8)',
      },
      boxShadow: {
        'glow': '0px 0px 8px rgba(255, 255, 255, 0.6)',
      },
      animation: {
        'moving-bg': 'movingBackground 6s ease infinite',
        'slow-panning': 'infinitePanning 400s linear infinite',
        'slow-spin': 'spin 10s linear infinite',
        'slow-spin-reverse': 'spin 10s linear infinite reverse',
        'slow-slide': 'moveUp 90s linear infinite',
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
        },
        moveUp: {
          '0%': {transform: 'translateY(%)'},
          '100%': {transform: 'translateY(-100%)'},
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
