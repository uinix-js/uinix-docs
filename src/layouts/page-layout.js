import React from 'react';
import {Layout} from 'uinix-ui';

import {LoadingPage, ScrollTop} from '../system/components/index.js';
import Breadcrumbs from './breadcrumbs.js';
import Footer from './footer.js';
import Header from './header.js';
import {useIsReady} from './use-is-ready.js';

const PageLayout = ({children}) => {
  const ready = () => {
    if (typeof document !== 'undefined') {
      document.querySelector('style[data-fela-type]');
    }
  };

  const isReady = useIsReady({ready});

  if (!isReady) {
    return <LoadingPage />;
  }

  return (
    <Layout direction="column" spacing="m" variant="layout.container">
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
