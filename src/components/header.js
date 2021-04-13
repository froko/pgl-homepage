import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import tw from 'twin.macro';

import AdCarousel from './ad-carousel';
import MobileNavigation from './navigation/mobile';
import Hamburger from './navigation/hamburger';
import ShoppingBasket from './navigation/basket';

const Header = ({ basket }) => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const StickyFlexBox = tw.div`fixed w-full top-0 flex justify-between items-center z-10 h-16 md:h-20 px-4 py-1 bg-white shadow-md`;
  const Spacer = tw.div`flex-grow`;

  const { site, allFile } = useStaticQuery(graphql`
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
      allFile(filter: { extension: { regex: "/(png)/" }, sourceInstanceName: { eq: "ads" } }) {
        edges {
          node {
            name
            childImageSharp {
              gatsbyImageData(quality: 100)
            }
          }
        }
      }
    }
  `);

  return (
    <StickyFlexBox>
      <StaticImage src="../images/logo.png" alt="logo" height={64} className="mr-4" />
      <StaticImage src="../images/header.png" alt="header" height={40} className="mr-4" />
      <Spacer />
      <AdCarousel images={allFile.edges.map((e) => e.node)} />
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
