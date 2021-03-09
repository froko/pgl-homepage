import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import tw from 'twin.macro';

import DesktopNavigation from './navigation/desktop';
import MobileNavigation from './navigation/mobile';
import Hamburger from './navigation/hamburger';

const Header = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const StickyFlexBox = tw.div`fixed top-0 flex justify-between items-center z-10 w-full h-16 p-4 bg-pgl-blue shadow-md`;

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
        src="../images/lettering-header.png"
        alt="lettering-header"
        placeholder="tracedSVG"
        layout="constrained"
        height={32}
        className="mr-4"
      />
      <DesktopNavigation links={site.data.navigation} />
      <MobileNavigation links={site.data.navigation} isOpen={mobileNavOpen} setIsOpen={setMobileNavOpen} />
      <Hamburger setIsOpen={setMobileNavOpen} />
    </StickyFlexBox>
  );
};

export default Header;
