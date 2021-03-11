import React from 'react';
import PropTypes from 'prop-types';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

const DesktopNavigation = ({ links }) => {
  return (
    <div className="hidden lg:block">
      {links.map((link, key) => (
        <AnchorLink
          key={`menu_desktop_link${key}`}
          className="ml-6 font-medium border-b-2 pb-2 border-transparent text-gray-700 hover:text-gray-900 hover:border-gray-900 transition duration-150 ease-in-out"
          to={link.to}
        >
          {link.name}
        </AnchorLink>
      ))}
    </div>
  );
};

DesktopNavigation.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired
    })
  )
};

export default DesktopNavigation;
