import React from 'react';
import tw from 'twin.macro';

const NoContent = () => {
  const Text = tw.p``;

  return <Text>Ihr Warenkorb ist leer.</Text>;
};

export default NoContent;
