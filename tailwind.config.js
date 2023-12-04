/** @type {import('tailwindcss').Config} */
const lineClamp = require('@tailwindcss/line-clamp')
const aspectRatio = require('@tailwindcss/aspect-ratio')

module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      // Z-index
      zIndex: {
        '-10': -10,
      },
      colors: {
        'grey-50': '#FAFAFA',
        'grey-100':'#D2D2D2',
        'grey-200': '#8F8F8F',
        'grey-400': '#5A5A5A',
        'grey-700': '#2F2F2F',
        'primary-50': '#E4F8FF',
        'primary-500': '#0C81A8',
        'primary-700': '#0C2732',
        'primary-100': '#E4F8FF',
        'primary-50013': 'rgba(11, 128, 168, 0.25)',
        'white':'#FFFFFF',
        'primary-50013-light': 'rgba(11, 128, 168, 0.13)',
        'secondary-200':'#CEEDC2',
        'focus-1': 'rgba(235, 87, 87, 0.60)',
        'modal':'rgba(0, 0, 0, 0.5)'
      },
     
    },
  },
  plugins: [lineClamp, aspectRatio]
}
