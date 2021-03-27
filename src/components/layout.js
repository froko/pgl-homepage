import React from 'react';
import tw, { GlobalStyles } from 'twin.macro';

import '../styles/style.css';
import Header from './header';

const Layout = ({ shopingBasket, children }) => {
  const PageContainer = tw.div`min-h-screen overflow-y-auto overflow-x-hidden`;
  const Content = tw.div``;

  return (
    <>
      <GlobalStyles />
      <PageContainer>
        <Header shopingBasket={shopingBasket} />
        <Content>{children}</Content>
      </PageContainer>
    </>
  );
};

export default Layout;
