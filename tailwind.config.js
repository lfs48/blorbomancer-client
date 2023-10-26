module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: '#191516'
        },
        purple: {
          '50': '#f1f2fc',
          '100': '#e6e7f9',
          '200': '#d2d3f3',
          '300': '#b6b6eb',
          '400': '#a099e0',
          '500': '#8c7fd5',
          '600': '#725ac1',
          '700': '#6c55ad',
          '800': '#57478c',
          '900': '#493f70',
          '950': '#2b2541',
      },
      red: {
        '50': '#fef2f3',
        '100': '#fee2e4',
        '200': '#ffc9cd',
        '300': '#fda4aa',
        '400': '#fa6f78',
        '500': '#f1424e',
        '600': '#df2935',
        '700': '#bb1a25',
        '800': '#9b1922',
        '900': '#801c23',
        '950': '#46090d',
    },
        white: {
          DEFAULT: '#F4F3EE'
        }
      }
    },
  },
  plugins: [],
}
