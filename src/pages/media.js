import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import tw from 'twin.macro';

import { BlueBackground } from '../components/styles';

const MediaCard = (props) => {
  const { slug, titel, vorschaubild } = props;

  const Card = tw.div`w-full sm:w-auto flex justify-center m-2 p-2`;
  const Title = tw.h2`text-gray-100 text-xl text-center font-bold mb-2`;

  const image = getImage(vorschaubild);

  return (
    <Card>
      <Link to={`/gallery/${slug}`}>
        <GatsbyImage image={image} alt={titel} className="rounded-full" />
        <Title>{titel}</Title>
      </Link>
    </Card>
  );
};

const Media = () => {
  const FlexBox = tw.div`flex flex-wrap justify-between`;

  const { media } = useStaticQuery(graphql`
    query MediaQuery {
      media: allContentfulMedia {
        nodes {
          id
          titel
          slug
          vorschaubild {
            gatsbyImageData(width: 200, height: 200)
          }
        }
      }
    }
  `);

  return (
    <BlueBackground id="media" title="Ton &amp; Bild">
      <FlexBox>
        {media.nodes.map((node) => (
          <MediaCard {...node} key={node.id} />
        ))}
      </FlexBox>
    </BlueBackground>
  );
};

export default Media;
