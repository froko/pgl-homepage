import tw from 'twin.macro';
import React from 'react';

import Seo from '../components/seo';
import Layout from '../components/layout';

const Wrapper = tw.div`
  flex items-center justify-center flex-col h-screen
`;

const Main = tw.div`
  p-6 bg-gray-100 rounded-lg shadow-2xl
`;

const Heading = tw.h1`
  text-2xl text-gray-500 uppercase text-center
`;

const Text = tw.p`
  text-xl text-gray-700
`;

export default function Custom404() {
  return (
    <Layout>
      <Wrapper>
        <Seo title="Page Not Found" />
        <Main>
          <Heading>Hopperla!</Heading>
          <Text>Leider konnten wir an dieser URL nichts finden.</Text>
        </Main>
      </Wrapper>
    </Layout>
  );
}
