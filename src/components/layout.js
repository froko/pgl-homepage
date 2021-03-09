import React from 'react';
import tw, { GlobalStyles } from 'twin.macro';
import styled from '@emotion/styled';

import 'typeface-inter';
import '../styles/style.css';

import Header from './header';
import Footer from './footer';

const Layout = ({ children }) => {
  const PageContainer = styled.div`
    position: relative;
    min-height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;
  `;
  const Content = tw.div`mt-16 pb-24`;

  return (
    <>
      <GlobalStyles />
      <PageContainer>
        <Header />
        <Content>{children}</Content>
        <Footer />
      </PageContainer>
    </>
  );
};

export default Layout;
