import React from 'react';
import {Layout} from 'uinix-ui';

import {ScrollTop} from '../system/components/index.js';
import Breadcrumbs from './breadcrumbs.js';
import Footer from './footer.js';
import Header from './header.js';
import {useReady} from './use-ready.js';

const PageLayout = ({children}) => {
  const ready = useReady({
    predicate: () => document.querySelector('style[data-fela-type]'),
  });

  if (!ready) {
    return null;
  }

  return (
    <Layout
      direction="column"
      h="100vh"
      mx="auto"
      px="l"
      spacing="m"
      w={['100%', '100%', 'widths.container']}
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
