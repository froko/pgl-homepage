import React from 'react';
import tw from 'twin.macro';

export const Section = ({ title, children }) => {
  const Container = tw.div`container mx-auto p-4 mt-4`;
  const Title = tw.h1`text-4xl text-pgl-blue font-bold mb-4`;

  return (
    <Container>
      <Title>{title}</Title>
      {children}
    </Container>
  );
};

export const Download = ({ link }) => {
  return <Link href={link}>Download</Link>;
};

export const List = tw.ul`list-disc ml-8`;
export const ListItem = tw.li``;
export const Link = tw.a`text-pgl-blue underline`;
