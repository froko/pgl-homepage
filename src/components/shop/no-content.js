import React from 'react';
import { navigate } from 'gatsby';
import tw from 'twin.macro';

import Button from '../button';

const NoContent = () => {
  const Text = tw.p`text-center`;
  const LineBreak = tw.br``;
  const Center = tw.div`text-center`;

  return (
    <>
      <Text>Dein Warenkorb ist leer.</Text>
      <LineBreak />
      <Center>
        <Button onClick={() => navigate('/#shop')}>Zurück zum Shop</Button>
      </Center>
    </>
  );
};

export default NoContent;
