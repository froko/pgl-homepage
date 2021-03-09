const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    graphql(`
      {
        news: allContentfulNews {
          nodes {
            slug
          }
        }
        media: allContentfulMedia {
          nodes {
            slug
          }
        }
      }
    `).then(({ errors, data }) => {
      if (errors) {
        reject(errors);
      }

      if (data && data.news && data.media) {
        const newsItemTemplate = path.resolve('./src/templates/news-item.js');
        const galleryItemTemplate = path.resolve('./src/templates/gallery-item.js');

        data.news.nodes.map(({ slug }) => {
          createPage({
            path: `/news/${slug}`,
            component: newsItemTemplate,
            context: { slug }
          });
        });

        data.media.nodes.map(({ slug }) => {
          createPage({
            path: `/gallery/${slug}`,
            component: galleryItemTemplate,
            context: { slug }
          });
        });
      }

      resolve();
    });
  });
};
