import React from 'react';
import tw from 'twin.macro';

const Button = ({ type, onClick, children }) => {
  const Btn = tw.button`items-center px-4 py-2 border border-transparent font-medium rounded-md text-white bg-pgl-blue hover:bg-white hover:border-pgl-blue hover:text-pgl-blue`;

  return (
    <Btn type={type} onClick={onClick}>
      {children}
    </Btn>
  );
};

export default Button;
