import React, { useState } from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { Parallax } from '../components/styles';

import Hero from './hero';
import Info from './info';
import News from './news';
import Agenda from './agenda';
import About from './about';
import Media from './media';
import ShopItems from './shop-items';
import Contact from './contact';

const Home = () => {
  const [shopingBasket, setShopingBasket] = useState([]);

  return (
    <Layout shopingBasket={shopingBasket}>
      <SEO title="PGL" />
      <Hero />
      <Parallax>
        <Info />
        <News />
        <Agenda />
        <About />
        <Media />
        <ShopItems addToBasket={(item) => setShopingBasket([...shopingBasket, item])} />
        <Contact />
      </Parallax>
    </Layout>
  );
};

export default Home;
