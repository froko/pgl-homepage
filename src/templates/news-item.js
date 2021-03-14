import React from 'react';
import { graphql } from 'gatsby';
import tw from 'twin.macro';

import { Disqus } from 'gatsby-plugin-disqus';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

import Layout from './template-layout';
import SEO from '../components/seo';
import Carousel from '../components/carousel';

const NewsItem = (props) => {
  const { slug, bilder, titel, autor, datum, text } = props.data.item;

  const Background = tw.div`bg-gray-100 p-4`;
  const Container = tw.div`container mx-auto`;
  const FlexBox = tw.div`flex flex-wrap mb-8`;
  const CarouselContainer = tw.div`w-full lg:w-2/4`;
  const TextContainer = tw.div`w-full mt-4 lg:mt-0 lg:w-2/4 lg:pl-12`;
  const Title = tw.h2`text-pgl-blue text-xl font-bold`;
  const Author = tw.p`italic pb-4`;
  const Bold = tw.span`font-bold`;
  const Text = tw.p``;

  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <Bold>{text}</Bold>
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (_node, children) => <Text>{children}&nbsp;</Text>
    }
  };

  return (
    <Layout>
      <SEO title={titel} />
      <Background>
        <Container>
          <FlexBox>
            {bilder && (
              <CarouselContainer>
                <Carousel images={bilder} />
              </CarouselContainer>
            )}
            <TextContainer>
              <Title>{titel}</Title>
              <Author>
                {autor}, {datum}
              </Author>
              {renderRichText(text, options)}
            </TextContainer>
          </FlexBox>
          <Disqus identifier={slug} title={titel} url={`https://pgl.ch/news/${slug}`} />
        </Container>
      </Background>
    </Layout>
  );
};

export default NewsItem;

export const query = graphql`
  query NewsItemQuery($slug: String!) {
    item: contentfulNews(slug: { eq: $slug }) {
      slug
      titel
      autor
      datum(formatString: "DD.MM.yyyy")
      text {
        raw
      }
      bilder {
        id
        title
        gatsbyImageData(layout: FIXED, height: 270)
      }
    }
  }
`;
