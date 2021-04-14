import React from 'react';
import tw, { GlobalStyles } from 'twin.macro';

import '../styles/style.css';
import { HeaderMargin } from '../components/styles';
import Header from '../components/header';

const Layout = ({ children }) => {
  const PageContainer = tw.div`min-h-screen overflow-y-auto overflow-x-hidden`;
  const Content = tw.div`mt-4`;

  return (
    <>
      <GlobalStyles />
      <PageContainer>
        <Header />
        <HeaderMargin>
          <Content>{children}</Content>
        </HeaderMargin>
      </PageContainer>
    </>
  );
};

export default Layout;
