import React from 'react';
import tw from 'twin.macro';

const Footer = () => {
  const Banner = tw.div`mt-4 w-full h-24 p-4 bg-gray-500 absolute bottom-0`;
  const Text = tw.p`text-gray-100`;

  return (
    <Banner>
      <Text>Gugenmusig Pilatusgeister</Text>
      <Text>6000 Luzern</Text>
    </Banner>
  );
};

export default Footer;
