import React from 'react';
import PropTypes from 'prop-types';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { motion } from 'framer-motion';

import Overlay from './overlay';

const menuItem = {
  closed: {
    opacity: 0,
    transition: {
      delay: 0,
      duration: 0
    },
    x: -20
  },
  open: (key) => ({
    opacity: 1,
    transition: {
      delay: 0.25 + key * 0.1,
      type: 'tween'
    },
    x: 0
  })
};

const MobileNavigation = ({ links, isOpen, setIsOpen }) => {
  return (
    <Overlay isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="container flex flex-col justify-center">
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
                className="font-semibold text-xl text-gray-100"
                to={link.to}
                onAnchorLinkClick={() => setIsOpen(false)}
              >
                {link.name}
              </AnchorLink>
            </motion.li>
          ))}
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
