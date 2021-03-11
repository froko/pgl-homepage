import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import tw from 'twin.macro';

const Hero = ({ heroRef }) => {
  const Overlay = tw.div`relative bg-black opacity-60 h-hero sm:h-hero-sm md:h-hero-md lg:h-hero-lg xl:h-hero-xl w-screen`;
  const ImageContainer = tw.div`absolute bottom-0 md:bottom-4 right-2 md:right-8`;
  const SubTitle = tw.h2`text-4xl lg:text-6xl font-bold text-gray-100 mb-8`;

  return (
    <Overlay ref={heroRef}>
      <div className="hidden md:block md:absolute md:top-8 md:left-4 lg:relative lg:text-center">
        <SubTitle>Tradition. Schunkeln. Röcke.</SubTitle>
        <SubTitle>Seit 1961.</SubTitle>
      </div>
      <ImageContainer>
        <StaticImage src="../images/hero.png" alt="lettering-header" layout="constrained" width={580} />
      </ImageContainer>
    </Overlay>
  );
};

export default Hero;
