import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import tw from 'twin.macro';

const AdImage = (props) => {
  const ImageContainer = tw.div`py-2 w-1/3 lg:w-1/5`;

  const { childImageSharp, name } = props;
  const image = getImage(childImageSharp.gatsbyImageData);

  return (
    <ImageContainer>
      <GatsbyImage image={image} alt={name} key={name} />
    </ImageContainer>
  );
};

const AdBanner = () => {
  const WhiteBackground = tw.div`w-full bg-white`;
  const FlexBox = tw.div`flex flex-wrap mx-2`;

  const { allFile } = useStaticQuery(graphql`
    query {
      allFile(filter: { extension: { regex: "/(png)/" }, sourceInstanceName: { eq: "ads" } }) {
        edges {
          node {
            id
            name
            childImageSharp {
              gatsbyImageData(quality: 90, height: 44, placeholder: TRACED_SVG)
            }
          }
        }
      }
    }
  `);

  return (
    <WhiteBackground>
      <FlexBox>
        {allFile.edges
          .map((e) => e.node)
          .map((node) => (
            <AdImage {...node} key={node.id} />
          ))}
      </FlexBox>
    </WhiteBackground>
  );
};

export default AdBanner;
