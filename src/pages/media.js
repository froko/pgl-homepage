import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import tw from 'twin.macro';

import DiagonalHeader from '../components/diagonal-header';
import { BlueBackground, Container, FlexBox, LightGray, PglBlue, Section } from '../components/styles';

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
    <Section id="media">
      <DiagonalHeader color={PglBlue} background={LightGray} title="Ton &amp; Bild" />
      <BlueBackground>
        <Container>
          <FlexBox>
            {media.nodes.map((node) => (
              <MediaCard {...node} key={node.id} />
            ))}
          </FlexBox>
        </Container>
      </BlueBackground>
    </Section>
  );
};

export default Media;
