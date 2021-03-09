module.exports = {
  purge: ['./src/**/*.jsx', './src/**/*.js'],
  darkMode: false,
  theme: {
    fontFamily: {
      sans: ['Inter var', 'system-ui', 'sans-serif']
    },
    extend: {
      colors: {
        'pgl-blue': '#009FE3'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
