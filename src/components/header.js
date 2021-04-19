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

  const StickyFlexBox = tw.div`fixed w-full top-0 flex justify-between items-center z-10 h-16 px-2 md:px-4 bg-white shadow-md`;
  const Spacer = tw.div`flex-grow`;
  const HiddenOnMobile = tw.div`hidden lg:block mr-4`;

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
      <HiddenOnMobile>
        <StaticImage src="../images/logo.png" alt="logo" height={46} placeholder="tracedSVG" />
      </HiddenOnMobile>
      <StaticImage src="../images/header.png" alt="header" height={40} className="mr-4" placeholder="tracedSVG" />
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
