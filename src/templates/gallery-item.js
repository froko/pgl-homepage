import React from 'react';
import { graphql } from 'gatsby';
import tw from 'twin.macro';

import Layout from './template-layout';
import Seo from '../components/seo';
import Gallery from '../components/gallery';
import Video from '../components/video';

const GalleryItem = (props) => {
  let counter = 0;

  const Container = tw.div`container mx-auto px-2 md:px-0 py-4 md:py-8`;
  const Title = tw.h1`text-4xl md:text-6xl text-pgl-blue font-bold text-center my-8`;
  const PseudoMargin = tw.div`mx-3`;
  const VideoMargin = tw.div`mx-1 md:mx-0`;
  const Spacer = tw.div`mb-4`;

  return (
    <Layout url="/#media">
      <Seo title={props.data.item.titel} />
      <div className="bg-gray-100">
        <Container>
          <Title>{props.data.item.titel}</Title>
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
      </div>
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
