import React from 'react';
import {Layout} from 'uinix-ui';

import {LoadingPage, ScrollTop} from '../system/components/index.js';
import Breadcrumbs from './breadcrumbs.js';
import Footer from './footer.js';
import Header from './header.js';
import {useIsReady} from './use-is-ready.js';

const PageLayout = ({children, isFullWidth}) => {
  const isReady = useIsReady();

  if (!isReady) {
    return <LoadingPage />;
  }

  return (
    <Layout
      direction="column"
      h="100vh"
      px="l"
      spacing="m"
      variant={isFullWidth ? undefined : 'layout.container'}
    >
      <Header />
      <Breadcrumbs />
      <Layout as="main" flex="auto" direction="column">
        {children}
      </Layout>
      <Footer />
      <ScrollTop />
    </Layout>
  );
};

export default PageLayout;
