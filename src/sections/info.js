import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import tw from 'twin.macro';

import { BlueBackground } from '../components/styles';

const Info = () => {
  const Flex = tw.div`flex`;
  const FlexGrow = tw.div`flex-1`;
  const TextContainer = tw.div``;
  const Text = tw.p`text-white text-center font-bold mx-2 text-2xl md:text-4xl`;
  const HiddenOnMobile = tw.div`hidden lg:block`;

  return (
    <BlueBackground>
      <Flex>
        <StaticImage src="../images/jubilaeum.jpeg" alt="jubilaeum" width={180} className="rounded-full ml-2" />
        <FlexGrow />
        <TextContainer>
          <Text>Wir jubilieren!</Text>
          <Text>60 Jahre Pilatusgeister Luzern!</Text>
        </TextContainer>
        <FlexGrow />
        <HiddenOnMobile>
          <StaticImage src="../images/jubilaeum.jpeg" alt="jubilaeum" width={180} className="rounded-full mr-2" />
        </HiddenOnMobile>
      </Flex>
    </BlueBackground>
  );
};

export default Info;
