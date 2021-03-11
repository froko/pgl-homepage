import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import News from './news';
import Agenda from './agenda';
import About from './about';
import Media from './media';
import Shop from './shop';
import Contact from './contact';

export default function Home() {
  return (
    <Layout>
      <SEO title="PGL" />
      <News />
      <Agenda />
      <About />
      <Media />
      <Shop />
      <Contact />
    </Layout>
  );
}
