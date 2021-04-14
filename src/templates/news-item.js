import React from 'react';
import { graphql, navigate } from 'gatsby';
import tw from 'twin.macro';

import { Disqus } from 'gatsby-plugin-disqus';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

import Layout from './template-layout';
import Seo from '../components/seo';
import Carousel from '../components/carousel';
import Button from '../components/button';

const NewsItem = (props) => {
  const { slug, bilder, titel, autor, datum, text } = props.data.item;

  const Container = tw.div`container mx-auto p-4`;
  const FlexBox = tw.div`flex flex-wrap mb-8`;
  const CarouselContainer = tw.div`w-full lg:w-2/4`;
  const TextContainer = tw.div`w-full mt-4 lg:mt-0 lg:w-2/4 lg:pl-12`;
  const TitleContainer = tw.div`relative w-full`;
  const Title = tw.h2`text-pgl-blue text-xl font-bold`;
  const Author = tw.p`italic`;
  const AbsoluteButton = tw.div`absolute bottom-0 right-0`;
  const RichTextContainer = tw.div`w-full mt-6`;
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
    <Layout url="/#news">
      <Seo title={titel} />
      <Container>
        <FlexBox>
          {bilder && (
            <CarouselContainer>
              <Carousel images={bilder} />
            </CarouselContainer>
          )}
          <TextContainer>
            <TitleContainer>
              <Title>{titel}</Title>
              <Author>
                {autor}, {datum}
              </Author>
              <AbsoluteButton>
                <Button onClick={() => navigate('/#news')}>Zurück</Button>
              </AbsoluteButton>
            </TitleContainer>
            <RichTextContainer>{renderRichText(text, options)}</RichTextContainer>
          </TextContainer>
        </FlexBox>
        <Disqus identifier={slug} title={titel} url={`https://pgl.ch/news/${slug}`} />
      </Container>
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
        gatsbyImageData(layout: FIXED, quality: 80, height: 280)
      }
    }
  }
`;
