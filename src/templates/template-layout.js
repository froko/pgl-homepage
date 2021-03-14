import React from 'react';
import { navigate } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import tw, { GlobalStyles } from 'twin.macro';

import 'typeface-inter';
import '../styles/style.css';

const Layout = ({ children }) => {
  const PageContainer = tw.div`min-h-screen overflow-y-auto overflow-x-hidden`;
  const Content = tw.div`mt-4 `;

  const goBack = () => {
    navigate('/');
  };

  return (
    <>
      <GlobalStyles />
      <PageContainer>
        <div className="relative container mx-auto mt-8 h-72 border-b border-pgl-blue">
          <button
            type="button"
            onClick={() => goBack()}
            class="absolute left-0 bottom-4 items-center ml-4 md:ml-0 px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-pgl-blue hover:bg-blue-800"
          >
            Zurück
          </button>
          <div className="absolute top-0 right-0">
            <StaticImage src="../images/pgl-logo-60.png" alt="pgl-logor" layout="constrained" />
          </div>
        </div>
        <Content>{children}</Content>
      </PageContainer>
    </>
  );
};

export default Layout;
