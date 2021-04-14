require('dotenv').config();

const { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } = process.env;

if (!CONTENTFUL_SPACE_ID || !CONTENTFUL_ACCESS_TOKEN) {
  throw new Error('Contentful spaceId and the access token need to be provided.');
}

module.exports = {
  siteMetadata: {
    title: 'Pilatusgeister Luzern',
    description: 'Website der Pilatusgeister Luzern',
    author: '@froko',
    locale: 'de',
    navigation: [
      { name: 'News', to: '/#news' },
      { name: 'Agenda', to: '/#agenda' },
      { name: 'Über uns', to: '/#about' },
      { name: 'Archiv', to: '/#media' },
      { name: 'Shop', to: '/#shop' },
      { name: 'Kontakt', to: '/#contact' },
      { name: 'Interner Bereich', to: 'http://intern.pgl.ch' }
    ]
  },
  flags: {
    DEV_SSR: false
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images/ads`,
        name: 'ads'
      }
    },
    {
      resolve: 'gatsby-plugin-anchor-links',
      options: {
        offset: -60
      }
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: CONTENTFUL_SPACE_ID,
        accessToken: CONTENTFUL_ACCESS_TOKEN
      }
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `pgl-homepage`
      }
    }
  ]
};
