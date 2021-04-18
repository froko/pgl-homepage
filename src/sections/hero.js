import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import tw from 'twin.macro';

import { Parallax } from '../components/styles';
import AdBanner from '../components/ad-banner';

const Hero = () => {
  const FullScreenContainer = tw.div`relative h-screen bg-black bg-opacity-40`;
  const ImageContainer = tw.div`absolute w-screen bottom-32 lg:bottom-20 text-center`;
  const AdContainer = tw.div`absolute w-screen bottom-0`;
  const SubTitle = tw.h2`text-3xl lg:text-4xl font-bold text-gray-100 mb-2`;

  return (
    <>
      <Parallax>
        <FullScreenContainer id="hero">
          <ImageContainer>
            <StaticImage
              src="../images/hero.png"
              alt="lettering-header"
              width={360}
              className="mx-4"
              placeholder="tracedSVG"
            />
            <SubTitle>Fasnacht im Herzen.</SubTitle>
            <SubTitle>Seit 1961.</SubTitle>
          </ImageContainer>
          <AdContainer>
            <AdBanner />
          </AdContainer>
        </FullScreenContainer>
      </Parallax>
    </>
  );
};

export default Hero;
