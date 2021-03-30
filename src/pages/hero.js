import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import tw from 'twin.macro';

import { Parallax } from '../components/styles';

const Hero = () => {
  const FullScreenContainer = tw.div`relative h-screen bg-black bg-opacity-40`;
  const ImageContainer = tw.div`absolute w-screen bottom-20 text-center`;
  const SubTitle = tw.h2`text-2xl md:text-3xl font-bold text-gray-100 mb-2`;

  return (
    <>
      <Parallax>
        <FullScreenContainer id="hero">
          <ImageContainer>
            <StaticImage
              src="../images/hero.png"
              alt="lettering-header"
              layout="constrained"
              width={400}
              className="mx-4"
            />
            <SubTitle>Fasnacht im Herzen.</SubTitle>
            <SubTitle>Seit 1961.</SubTitle>
          </ImageContainer>
        </FullScreenContainer>
      </Parallax>
    </>
  );
};

export default Hero;
