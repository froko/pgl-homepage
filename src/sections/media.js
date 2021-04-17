import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';
import tw from 'twin.macro';

import { BlueBackground } from '../components/styles';

const Card = tw.div`w-full sm:w-auto flex justify-center m-2 p-2`;
const Title = tw.h2`text-gray-100 text-xl text-center font-bold mb-2`;

const MediaCard = (props) => {
  const { slug, titel, vorschaubild } = props;

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
      media: allContentfulMedia(sort: { fields: [titel], order: DESC }, filter: { archiv: { eq: false } }) {
        nodes {
          id
          titel
          slug
          vorschaubild {
            gatsbyImageData(quality: 80, height: 220, width: 220)
          }
        }
      }
    }
  `);

  return (
    <BlueBackground id="media" title="Archiv">
      <FlexBox>
        {media.nodes.map((node) => (
          <MediaCard {...node} key={node.id} />
        ))}
        <Card>
          <Link to={`/#media`}>
            <StaticImage
              src="../images/photo-archiv.jpg"
              width={220}
              height={220}
              alt="photo"
              className="rounded-full"
            />
            <Title>Damals</Title>
          </Link>
        </Card>
        <Card>
          <Link to={`/audio-archiv`}>
            <StaticImage
              src="../images/audio-archiv.jpg"
              width={220}
              height={220}
              alt="audio"
              className="rounded-full"
            />
            <Title>Tonträger</Title>
          </Link>
        </Card>
      </FlexBox>
    </BlueBackground>
  );
};

export default Media;
