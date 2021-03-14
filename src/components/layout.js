import React, { useRef, useEffect, useState } from 'react';
import tw, { GlobalStyles } from 'twin.macro';

import 'typeface-inter';
import '../styles/style.css';
import Header from './header';
import Hero from './hero';

const getDimensions = (ele) => {
  const { height } = ele.getBoundingClientRect();
  const offsetTop = ele.offsetTop;
  const offsetBottom = offsetTop + height;

  return {
    height,
    offsetTop,
    offsetBottom
  };
};

const Layout = ({ children }) => {
  const [isTransperant, setTransperant] = useState(true);

  const PageContainer = tw.div`min-h-screen overflow-y-auto overflow-x-hidden`;
  const Content = tw.div``;

  const heroRef = useRef(null);

  const handleScroll = () => {
    const { height: heroHeight } = getDimensions(heroRef.current);
    const scrollPosition = window.scrollY + 80;

    setTransperant(scrollPosition < heroHeight);
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <GlobalStyles />
      <PageContainer>
        <div className="bg-hero-pattern bg-fixed bg-full-width bg-no-repeat">
          <Header isTransperant={isTransperant} />
          <Hero heroRef={heroRef} />
          <Content>{children}</Content>
        </div>
      </PageContainer>
    </>
  );
};

export default Layout;
