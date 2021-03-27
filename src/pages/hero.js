import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import tw from 'twin.macro';

import { Parallax } from '../components/styles';

const Hero = () => {
  const FullScreenContainer = tw.div`relative h-screen bg-black bg-opacity-40`;
  const SubTitleContainer = tw.div`relative top-20 text-center`;
  const SubTitle = tw.h2`text-2xl md:text-6xl font-bold text-gray-100 mb-8`;
  const ImageContainer = tw.div`absolute bottom-0 md:bottom-4 right-2 md:right-8 ml-2`;

  return (
    <>
      <Parallax>
        <FullScreenContainer>
          <SubTitleContainer>
            <SubTitle>Tradition. Schunkeln. Röcke.</SubTitle>
            <SubTitle>Seit 1961.</SubTitle>
          </SubTitleContainer>
          <ImageContainer>
            <StaticImage src="../images/hero.png" alt="lettering-header" layout="constrained" width={580} />
          </ImageContainer>
        </FullScreenContainer>
      </Parallax>
    </>
  );
};

export default Hero;
