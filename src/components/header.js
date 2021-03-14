import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import tw from 'twin.macro';

import { motion } from 'framer-motion';

import MobileNavigation from './navigation/mobile';
import Hamburger from './navigation/hamburger';

const Header = ({ isTransparent }) => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const StickyFlexBox = tw(
    motion.div
  )`fixed w-full top-0 flex justify-between items-center z-10 h-16 p-4 opacity-0 bg-pgl-blue shadow-md`;

  const variants = {
    hero: {
      opacity: 0,
      transition: {
        delay: 0.1,
        duration: 0.5,
        type: 'tween'
      }
    },
    content: {
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 0.5,
        type: 'tween'
      }
    }
  };

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
    <StickyFlexBox animate={isTransparent ? 'hero' : 'content'} variants={variants}>
      <StaticImage
        src="../images/header-bright.png"
        alt="lettering-header"
        layout="constrained"
        height={32}
        className="mr-4"
      />
      <div className="flex-grow" />
      <MobileNavigation links={site.data.navigation} isOpen={mobileNavOpen} setIsOpen={setMobileNavOpen} />
      <Hamburger setIsOpen={setMobileNavOpen} />
    </StickyFlexBox>
  );
};

export default Header;

Header.propTypes = {
  isTransperant: PropTypes.bool
};
