module.exports = {
  purge: ['./src/**/*.jsx', './src/**/*.js'],
  darkMode: false,
  theme: {
    extend: {
      minHeight: {
        'remaining-screen': 'calc(100vh - 11.5rem)'
      },
      colors: {
        'pgl-blue': '#017CC2'
      },
      backgroundImage: {
        'hero-portrait': "url('../images/bg-hoch.jpg')",
        'hero-landscape': "url('../images/bg-breit.jpg')"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
