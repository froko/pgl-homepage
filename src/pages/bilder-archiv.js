import React from 'react';
import { Link, navigate, graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import tw from 'twin.macro';

import Layout from '../components/layout';
import Seo from '../components/seo';
import { HeaderMargin, Parallax } from '../components/styles';
import Button from '../components/button';

const Card = tw.div`w-full sm:w-auto flex justify-center my-2 mx-8`;
const Title = tw.h2`w-52 text-pgl-blue text-xl text-center font-bold mb-2`;

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

const Jahr = ({ jahr, media }) => {
  const ArchivContainer = tw.div`bg-white container mx-auto mb-8 p-4`;
  const SubTitle = tw.h3`text-pgl-blue text-2xl font-bold text-center border-b border-pgl-blue mx-2 mb-2`;
  const FlexBox = tw.div`flex flex-wrap justify-center`;

  return (
    <ArchivContainer>
      <SubTitle>{jahr}</SubTitle>
      <FlexBox>
        {media.nodes
          .filter((node) => node.jahr === jahr)
          .map((node) => (
            <MediaCard {...node} key={node.id} />
          ))}
      </FlexBox>
    </ArchivContainer>
  );
};

const BilderArchiv = () => {
  const WhiteBackground = tw.div`w-full px-2 py-8 bg-white bg-opacity-90`;
  const TitleContainer = tw.div`relative container mx-auto mb-8`;
  const Title = tw.h1`text-4xl text-pgl-blue font-bold text-left lg:text-center`;
  const AbsoluteButton = tw.div`absolute bottom-0 right-0`;

  const { media } = useStaticQuery(graphql`
    query MediaArchivQuery {
      media: allContentfulMedia(sort: { fields: [jahr, titel], order: ASC }, filter: { archiv: { eq: true } }) {
        nodes {
          id
          jahr
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
    <Layout>
      <Seo title="Archiv" />
      <Parallax>
        <HeaderMargin>
          <WhiteBackground>
            <TitleContainer>
              <Title>Damals</Title>
              <AbsoluteButton>
                <Button onClick={() => navigate('/#media')}>Zurück</Button>
              </AbsoluteButton>
            </TitleContainer>
            <Jahr jahr={2017} media={media} />
            <Jahr jahr={2016} media={media} />
          </WhiteBackground>
        </HeaderMargin>
        <Parallax />
      </Parallax>
    </Layout>
  );
};

export default BilderArchiv;
