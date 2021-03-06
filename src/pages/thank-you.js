import React, { useEffect } from 'react';
import { navigate } from 'gatsby';
import tw from 'twin.macro';

import Layout from '../components/layout';
import Seo from '../components/seo';
import Button from '../components/button';
import { Parallax, WhiteBackground, HeaderMargin } from '../components/styles';

const Shop = () => {
  const ShopContent = tw.div`bg-white max-w-lg md:mx-auto p-2 min-h-remaining-screen`;
  const Text = tw.p`text-center`;
  const LineBreak = tw.br``;
  const Center = tw.div`text-center`;

  useEffect(() => {
    sessionStorage.removeItem('shopping-basket');
  });

  return (
    <Layout>
      <Seo title="Shop" />
      <Parallax>
        <HeaderMargin>
          <WhiteBackground title="Shop">
            <ShopContent>
              <Text>Vielen Dank für deine Bestellung!</Text>
              <Text>Du wirst in Kürze ein Mail mit den Zahlungsinformationen erhalten.</Text>
              <LineBreak />
              <Center>
                <Button onClick={() => navigate('/')}>Zurück zur Homepage</Button>
              </Center>
            </ShopContent>
          </WhiteBackground>
        </HeaderMargin>
        <Parallax />
      </Parallax>
    </Layout>
  );
};

export default Shop;
