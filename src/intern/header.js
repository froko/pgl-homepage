import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import tw from 'twin.macro';

const Header = () => {
  const StickyFlexBox = tw.div`fixed w-full top-0 flex justify-between items-center z-10 h-16 px-2 md:px-4 bg-white shadow-md`;
  const Spacer = tw.div`flex-grow`;
  const HiddenOnMobile = tw.div`hidden lg:block mr-4`;
  const RedText = tw.span`text-red-800 text-xl lg:text-4xl font-bold`;

  return (
    <StickyFlexBox>
      <HiddenOnMobile>
        <StaticImage src="../images/logo.png" alt="logo" height={46} placeholder="tracedSVG" />
      </HiddenOnMobile>
      <StaticImage src="../images/header.png" alt="header" height={40} className="mr-4" placeholder="tracedSVG" />
      <Spacer />
      <RedText>Intern</RedText>
      <Spacer />
    </StickyFlexBox>
  );
};

export default Header;
