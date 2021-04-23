import React from 'react';
import PropTypes from 'prop-types';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { motion } from 'framer-motion';
import tw from 'twin.macro';

import Overlay from './overlay';

const menuItem = {
  closed: {
    opacity: 0,
    transition: {
      delay: 0,
      duration: 0
    }
  },
  open: (key) => ({
    opacity: 1,
    transition: {
      delay: 0.25 + key * 0.1,
      type: 'tween'
    }
  })
};

const MobileNavigation = ({ links, isOpen, setIsOpen }) => {
  const Link = tw.a`font-semibold text-xl lg:text-2xl text-gray-100`;

  return (
    <Overlay isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="container mx-auto flex flex-col justify-center">
        <ul className="text-center">
          {links.map((link, key) => (
            <motion.li
              className="my-10"
              animate={isOpen ? 'open' : 'closed'}
              custom={key}
              key={`menu_mobile_link${key}`}
              variants={menuItem}
            >
              <AnchorLink
                className="font-semibold text-xl lg:text-2xl text-gray-100"
                to={link.to}
                onAnchorLinkClick={() => setIsOpen(false)}
              >
                {link.name}
              </AnchorLink>
            </motion.li>
          ))}
          <motion.li>
            <Link href="https://pgl.ch/intern" className="my-20" variants={menuItem}>
              Interner Bereich
            </Link>
          </motion.li>
        </ul>
      </div>
    </Overlay>
  );
};

MobileNavigation.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired
    })
  ),
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired
};

export default MobileNavigation;
