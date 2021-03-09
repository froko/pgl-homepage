import React from 'react';
import tw from 'twin.macro';
import styled from '@emotion/styled';

const DiagonalHeader = ({ color, background, title }) => {
  const Header = tw.div`relative pb-4`;
  const SVG = tw.svg`w-full h-28`;
  const TitleBar = tw.div`pb-2 -mt-4 md:-mt-6`;
  const Title = tw.h1`text-4xl md:text-6xl font-bold text-center`;
  const ColoredHeader = styled(Header)`
    background-color: ${color};
  `;
  const ColoredTitleBar = styled(TitleBar)`
    background-color: ${color};
  `;
  const ColoredTitle = styled(Title)`
    color: ${background};
  `;

  return (
    <ColoredHeader>
      <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
        <rect width="1000" height="100" fill={background} />
        <polygon points="1000 0 1000 100 0 100" fill={color} />
      </SVG>

      <ColoredTitleBar>
        <ColoredTitle>{title}</ColoredTitle>
      </ColoredTitleBar>
    </ColoredHeader>
  );
};

export default DiagonalHeader;
