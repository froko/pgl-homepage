import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import tw from 'twin.macro';

import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

import { Container, Section } from '../components/styles';

const NewsCard = (props) => {
  const { id, slug, titel, autor, datum, vorschautext, vorschaubild } = props;

  const Card = tw.div`h-full bg-white mx-2 md:mx-0 shadow-sm rounded-md overflow-hidden hover:shadow-md`;
  const ImageContainer = tw.div``;
  const TextContainer = tw.div`p-4`;
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

  const image = getImage(vorschaubild);

  return (
    <Card id={id}>
      <Link to={`/news/${slug}`}>
        {vorschaubild && (
          <ImageContainer>
            <GatsbyImage image={image} alt={titel} />
          </ImageContainer>
        )}

        <TextContainer>
          <Title>{titel}</Title>
          <Author>
            {autor}, {datum}
          </Author>
          {renderRichText(vorschautext, options)}
          <Text>Weiterlesen...</Text>
        </TextContainer>
      </Link>
    </Card>
  );
};

const News = () => {
  const Grid = tw.div`grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch pb-4`;
  const NewsCardContainer = tw.div`h-full w-full p-1`;
  const Title = tw.h2`text-pgl-blue text-6xl text-center font-bold pt-20`;

  const data = useStaticQuery(graphql`
    query NewsQuery {
      news: allContentfulNews(sort: { fields: [datum], order: DESC }) {
        edges {
          node {
            id
            titel
            slug
            autor
            datum(formatString: "DD.MM.yyyy")
            vorschautext {
              raw
            }
            vorschaubild {
              gatsbyImageData
            }
          }
        }
      }
    }
  `);

  return (
    <Section id="news">
      <Container>
        <Title>News</Title>
        <Grid className="pt-8">
          {data.news.edges.map(({ node }) => (
            <NewsCardContainer key={node.id}>
              <NewsCard {...node} />
            </NewsCardContainer>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default News;
