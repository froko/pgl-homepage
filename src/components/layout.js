import React from 'react';
import tw, { GlobalStyles } from 'twin.macro';

import '../styles/style.css';
import Header from './header';

const Layout = ({ basket, children }) => {
  const PageContainer = tw.div`min-h-screen overflow-y-auto overflow-x-hidden`;
  const Content = tw.div``;

  return (
    <>
      <GlobalStyles />
      <PageContainer>
        <Header basket={basket} />
        <Content>{children}</Content>
      </PageContainer>
    </>
  );
};

export default Layout;
