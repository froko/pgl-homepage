import React, { useState, useEffect } from 'react';

import Layout from '../components/layout';
import Seo from '../components/seo';
import { Parallax } from '../components/styles';

import Hero from '../sections/hero';
import Info from '../sections/info';
import News from '../sections/news';
import Agenda from '../sections/agenda';
import About from '../sections/about';
import Media from '../sections/media';
import ShopItems from '../sections/shop';
import Contact from '../sections/contact';

const Home = () => {
  const [shoppingBasket, setShoppingBasket] = useState([]);

  useEffect(() => {
    setShoppingBasket(JSON.parse(sessionStorage.getItem('shopping-basket')) ?? []);
  }, []);

  useEffect(() => {
    window.history.replaceState(null, null, ' ');
  });

  useEffect(() => {
    const keys = [];
    for (let index = 0; index < sessionStorage.length; index++) {
      if (sessionStorage.key(index).startsWith('@@scroll')) {
        keys.push(sessionStorage.key(index));
      }
    }

    keys.forEach((key) => {
      sessionStorage.removeItem(key);
    });
  });

  const addToBasket = (item) => {
    setShoppingBasket([...shoppingBasket, item]);
    sessionStorage.setItem('shopping-basket', JSON.stringify([...shoppingBasket, item]));
  };

  return (
    <Layout basket={shoppingBasket}>
      <Seo title="PGL" />
      <Hero />
      <Parallax>
        <Info />
        <News />
        <Agenda />
        <About />
        <Media />
        <ShopItems addToBasket={(item) => addToBasket(item)} />
        <Contact />
      </Parallax>
    </Layout>
  );
};

export default Home;
