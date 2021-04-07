import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import tw from 'twin.macro';

import { BlueBackground } from '../components/styles';

const Info = () => {
  const Flex = tw.div`flex`;
  const FlexGrow = tw.div`flex-1`;
  const Text = tw.p`text-white text-center font-bold mx-2 md:text-2xl`;

  return (
    <BlueBackground>
      <Flex>
        <StaticImage src="../images/jubilaeum.jpeg" alt="jubilaeum" width={150} className="rounded-full ml-2" />
        <FlexGrow />
        <Text>Wir jubilieren! 60 Jahre Pilatusgeister Luzern!</Text>
        <FlexGrow />
        <StaticImage src="../images/jubilaeum.jpeg" alt="jubilaeum" width={150} className="rounded-full mr-2" />
      </Flex>
    </BlueBackground>
  );
};

export default Info;
