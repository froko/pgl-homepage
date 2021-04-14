import React from 'react';
import tw from 'twin.macro';

import '../styles/style.css';

export const HeaderMargin = tw.div`pt-16`;

export const Parallax = ({ children }) => {
  return <div className="parallax">{children}</div>;
};

const Section = tw.div`w-full py-8 `;
const Title = tw.h1`text-4xl text-center font-bold`;
const Container = tw.div`container mx-auto mt-4`;

export const WhiteBackground = ({ id, title, children }) => {
  const WhiteSection = tw(Section)`bg-white bg-opacity-90`;
  const BlueTitle = tw(Title)`text-pgl-blue`;

  return (
    <WhiteSection id={id}>
      <BlueTitle>{title}</BlueTitle>
      <Container>{children}</Container>
    </WhiteSection>
  );
};

export const BlueBackground = ({ id, title, children }) => {
  const BlueSection = tw(Section)`bg-pgl-blue bg-opacity-90`;
  const WhiteTitle = tw(Title)`text-white`;

  return (
    <BlueSection id={id}>
      <WhiteTitle>{title}</WhiteTitle>
      <Container>{children}</Container>
    </BlueSection>
  );
};
