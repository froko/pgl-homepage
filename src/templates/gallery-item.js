import React from 'react';
import { graphql, navigate } from 'gatsby';
import tw from 'twin.macro';

import Layout from './template-layout';
import Seo from '../components/seo';
import Gallery from '../components/gallery';
import Video from '../components/video';
import Button from '../components/button';

const GalleryItem = (props) => {
  let counter = 0;

  const Container = tw.div`container mx-auto p-4`;
  const TitleContainer = tw.div`relative w-full`;
  const Title = tw.h1`text-4xl md:text-6xl text-pgl-blue font-bold text-left lg:text-center`;
  const AbsoluteButton = tw.div`absolute bottom-0 right-0`;
  const PseudoMargin = tw.div`mx-3 mt-6`;
  const VideoMargin = tw.div`mx-1 md:mx-0`;
  const Spacer = tw.div`mb-4`;

  return (
    <Layout url="/#media">
      <Seo title={props.data.item.titel} />
      <Container>
        <TitleContainer>
          <Title>{props.data.item.titel}</Title>
          <AbsoluteButton>
            <Button onClick={() => navigate('/#media')}>Zurück</Button>
          </AbsoluteButton>
        </TitleContainer>
        <PseudoMargin>
          <Gallery images={props.data.item.bilder} />
        </PseudoMargin>
        <Spacer />
        {props.data.item.youtubeLinks.map((url) => (
          <VideoMargin key={counter++}>
            <Video videoSrcURL={url} />
            <Spacer />
          </VideoMargin>
        ))}
      </Container>
    </Layout>
  );
};

export default GalleryItem;

export const query = graphql`
  query MediaItemQuery($slug: String!) {
    item: contentfulMedia(slug: { eq: $slug }) {
      titel
      youtubeLinks
      bilder {
        id
        title
        thumb: gatsbyImageData(width: 300, height: 300)
        file {
          url
          fileName
        }
      }
    }
  }
`;
