import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import tw from 'twin.macro';

import MobileNavigation from './navigation/mobile';
import Hamburger from './navigation/hamburger';

const BasketImage = () => {
  return <StaticImage src="../images/basket-black.png" alt="basket" layout="constrained" width={24} className="mr-4" />;
};

const Header = ({ shopingBasket }) => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const StickyFlexBox = tw.div`fixed w-full top-0 flex justify-between items-center z-10 h-16 p-4 bg-white shadow-md`;
  let basket;
  if (shopingBasket.length > 0) {
    basket = <BasketImage />;
  }

  const { site } = useStaticQuery(graphql`
    query {
      site {
        data: siteMetadata {
          title
          navigation {
            name
            to
          }
        }
      }
    }
  `);

  return (
    <StickyFlexBox>
      <StaticImage
        src="../images/header.png"
        alt="lettering-header"
        layout="constrained"
        height={32}
        className="mr-4"
      />
      <div className="flex-grow" />
      {basket}
      <MobileNavigation links={site.data.navigation} isOpen={mobileNavOpen} setIsOpen={setMobileNavOpen} />
      <Hamburger setIsOpen={setMobileNavOpen} />
    </StickyFlexBox>
  );
};

export default Header;

Header.propTypes = {
  isTransperant: PropTypes.bool
};
