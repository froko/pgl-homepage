import React from 'react';
import PropTypes from 'prop-types';
import { FaBars } from 'react-icons/fa';

const Hamburger = ({ setIsOpen }) => {
  return (
    <button onClick={() => setIsOpen(true)}>
      <FaBars className="h-6 w-auto  fill-current" />
    </button>
  );
};

Hamburger.propTypes = {
  setIsOpen: PropTypes.func.isRequired
};

export default Hamburger;
