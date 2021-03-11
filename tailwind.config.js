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
      },
      height: {
        hero: '12rem',
        'hero-sm': '20rem',
        'hero-md': '24rem',
        'hero-lg': '32rem',
        'hero-xl': '40rem'
      },
      backgroundImage: () => ({
        'hero-pattern': "url('../images/background.png')"
      }),
      backgroundSize: {
        'full-width': '100%'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
