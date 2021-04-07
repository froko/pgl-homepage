import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import tw from 'twin.macro';

import MobileNavigation from './navigation/mobile';
import Hamburger from './navigation/hamburger';
import ShoppingBasket from './navigation/basket';

const Header = ({ basket }) => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const StickyFlexBox = tw.div`fixed w-full top-0 flex justify-between items-center z-10 h-16 md:h-20 px-4 py-1 bg-white shadow-md`;
  const Spacer = tw.div`flex-grow`;

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
      <StaticImage src="../images/logo.png" alt="logo" height={64} className="hidden lg:block mr-4" />
      <StaticImage src="../images/header.png" alt="header" height={36} className="mr-4" />
      <Spacer />
      <ShoppingBasket basket={basket} />
      <Hamburger setIsOpen={setMobileNavOpen} />
      <MobileNavigation links={site.data.navigation} isOpen={mobileNavOpen} setIsOpen={setMobileNavOpen} />
    </StickyFlexBox>
  );
};

export default Header;

Header.propTypes = {
  isTransperant: PropTypes.bool
};
