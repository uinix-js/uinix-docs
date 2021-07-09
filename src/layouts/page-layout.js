import React from 'react';
import {Layout} from 'uinix-ui';

import {useIsReady} from '../utils/index.js';
import Breadcrumbs from './breadcrumbs.js';
import Footer from './footer.js';
import Header from './header.js';
import TocSelect from './toc-select.js';

const PageLayout = ({children, isFullWidth}) => {
  const isReady = useIsReady();

  if (!isReady) {
    return null;
  }

  return (
    <>
      <Layout
        direction="column"
        h="100vh"
        spacing="l"
        variant={isFullWidth ? 'layout.fullWidth' : 'layout.container'}
      >
        <Header />
        <Breadcrumbs />
        <Layout as="main" flex="auto" direction="column">
          {children}
        </Layout>
        <Footer />
      </Layout>
      <TocSelect />
    </>
  );
};

export default PageLayout;
