import React from 'react';
import { navigate } from 'gatsby';
import tw from 'twin.macro';

import Layout from '../components/layout';
import SEO from '../components/seo';

import { Parallax, WhiteBackground } from '../components/styles';

const Shop = () => {
  const HeaderMargin = tw.div`pt-16`;
  const ShopContent = tw.div`bg-white max-w-lg md:mx-auto px-2 min-h-remaining-screen`;

  return (
    <Layout>
      <SEO title="Shop" />
      <Parallax>
        <HeaderMargin>
          <WhiteBackground title="Shop">
            <ShopContent>
              <p>Vielen Dank für Ihre Bestellung!</p>
              <p>Sie werden in Kürze ein Mail mit den Zahlungsinformationen erhalten.</p>
              <p>&nbsp;</p>
              <button
                type="button"
                onClick={() => navigate('/')}
                className="items-center ml-4 md:ml-0 px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-pgl-blue hover:bg-white hover:border-pgl-blue hover:text-pgl-blue"
              >
                Zurück
              </button>
            </ShopContent>
          </WhiteBackground>
        </HeaderMargin>
        <Parallax />
      </Parallax>
    </Layout>
  );
};

export default Shop;
