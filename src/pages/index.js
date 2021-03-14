import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import SplashScreen from '../components/splash-screen';
import Layout from '../components/layout';
import SEO from '../components/seo';

import News from './news';
import Agenda from './agenda';
import About from './about';
import Media from './media';
import Shop from './shop';
import Contact from './contact';

const Home = () => {
  const [isLoading, setLoading] = useState(true);

  const MotionSplashScreen = motion(SplashScreen);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return isLoading ? (
    <AnimatePresence>
      <MotionSplashScreen initial={{ opacity: 1 }} transition={{ duration: 1 }} exit={{ opacity: 0 }} />
    </AnimatePresence>
  ) : (
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
};

export default Home;
