import {navigate} from 'gatsby';
import React, {useEffect, useState} from 'react';
import {Layout} from 'uinix-ui';

import {ScrollTop} from '../system/components/index.js';
import Breadcrumbs from './breadcrumbs.js';
import Footer from './footer.js';
import Header from './header.js';

const PageLayout = ({children, isFullWidth}) => {
  const [isReady, setIsReady] = useState(false);

  // Hack around gatsby/fela FOUC
  useEffect(() => {
    navigate(window.location.pathname);
    setIsReady(true);
  }, []);

  if (!isReady) {
    return null;
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
