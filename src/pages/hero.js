import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import tw from 'twin.macro';

import { BlueBackground, Container, Section } from '../components/styles';

const Hero = () => {
  const FlexBox = tw.div`lg:flex content-center items-center text-center`;
  const SubTitle = tw.h2`text-2xl md:text-4xl font-bold text-gray-100 mt-8`;

  return (
    <Section id="hero">
      <BlueBackground>
        <Container>
          <FlexBox>
            <StaticImage className="w-full lg:w-2/4" src="../images/logo.png" alt="logo" placeholder="tracedSVG" />
            <div className="w-full lg:w-2/4">
              <StaticImage
                src="../images/lettering-hero.png"
                alt="lettering-hero"
                placeholder="tracedSVG"
                layout="constrained"
                className="mt-12 lg:mt-0 mx-4 lg:mx-12"
              />
              <SubTitle>Tradition. Schunkeln. Röcke.</SubTitle>
              <SubTitle>Seit 1961.</SubTitle>
            </div>
          </FlexBox>
        </Container>
      </BlueBackground>
    </Section>
  );
};

export default Hero;
