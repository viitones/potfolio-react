// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['customFont', 'sans-serif']
      },
      colors: {
        azul: '#1d4ed8',
        azulHover: '#1e40af',
        cinzaNav: '#78716c',
        cinzaNavHover: '#44403c',
        cinzaP: '#6c757d',
        cinzaFooter: '#f5f5f5',
        cinzaApr: '#34393d',
        rosa: '#e21e80',
        branco: '#f8fafc'
      },
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '3px 3px 6px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
      animation: {
        moon: 'spiner .7s cubic-bezier(.87,-0.55,0,1.88)',
        sun: 'spinerSun .7s cubic-bezier(.87,-0.55,0,1.88)'
      },
      keyframes: {
        spiner: {
          'from': { transform: 'rotate(80deg)', width: '25px', height: '25px' },
        },
        spinerSun: {
          'from': { transform: 'rotate(-80deg)', width: '25px', height: '25px' },
        },
      }
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
}