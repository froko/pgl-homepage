import React from 'react';
import tw from 'twin.macro';

import Layout from '../../intern/layout';
import Allgemein from '../../intern/allgemein';
import Aufnahmen from '../../intern/aufnahmen';
import Einladungen from '../../intern/einladungen';
import Newsletter from '../../intern/newsletter';
import Noten from '../../intern/noten';

const Home = () => {
  const HeaderMargin = tw.div`pt-16`;

  return (
    <Layout>
      <HeaderMargin>
        <Allgemein />
        <Newsletter />
        <Einladungen />
        <Aufnahmen />
        <Noten />
      </HeaderMargin>
    </Layout>
  );
};

export default Home;
