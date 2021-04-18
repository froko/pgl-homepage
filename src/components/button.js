import React from 'react';
import tw from 'twin.macro';

import loadingGif from '../images/loading-indicator.gif';

const Button = ({ type, loading, onClick, children }) => {
  const RelativeContainer = tw.div`relative text-center`;
  const Btn = tw.button`items-center px-4 py-2 border border-transparent font-medium rounded-md text-white bg-pgl-blue hover:bg-white hover:border-pgl-blue hover:text-pgl-blue`;
  const LoadingImage = tw.img`absolute h-10 ml-2 top-0 right-4`;

  return loading ? (
    <RelativeContainer>
      <Btn type={type} disabled={true}>
        Bitte warten...
      </Btn>
      <LoadingImage src={loadingGif} alt="Loading Indicator" />
    </RelativeContainer>
  ) : (
    <Btn type={type} onClick={onClick}>
      {children}
    </Btn>
  );
};

export default Button;
