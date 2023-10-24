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
        white: {
          DEFAULT: '#F4F3EE'
        }
      }
    },
  },
  plugins: [],
}
