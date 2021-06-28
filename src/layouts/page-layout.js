import React from 'react';
import {Layout} from 'uinix-ui';

import {LoadingPage, ScrollTop} from '../system/components/index.js';
import Breadcrumbs from './breadcrumbs.js';
import Footer from './footer.js';
import Header from './header.js';
import {ReadyStateType, useReadyState} from './use-ready-state.js';

const PageLayout = ({children, isFullWidth}) => {
  const readyState = useReadyState();

  switch (readyState) {
    case ReadyStateType.Pending:
      return <LoadingPage />;
    case ReadyStateType.Ready:
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
    default:
      return null;
  }
};

export default PageLayout;
