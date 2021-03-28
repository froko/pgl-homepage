import React from 'react';
import { navigate } from 'gatsby';
import tw, { GlobalStyles } from 'twin.macro';

import '../styles/style.css';
import Header from '../components/header';

const Layout = ({ url, children }) => {
  const PageContainer = tw.div`min-h-screen overflow-y-auto overflow-x-hidden`;
  const Content = tw.div`mt-4 `;

  return (
    <>
      <GlobalStyles />
      <PageContainer>
        <Header shopingBasket={[]} />
        <div className="relative container mx-auto mt-20 h-72 border-b border-pgl-blue">
          <button
            type="button"
            onClick={() => navigate(url)}
            className="absolute top-0 right-0 items-center ml-4 md:ml-0 px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-pgl-blue hover:bg-blue-800"
          >
            Zurück
          </button>
        </div>
        <Content>{children}</Content>
      </PageContainer>
    </>
  );
};

export default Layout;
