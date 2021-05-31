import React from 'react';
import {Layout} from 'uinix-ui';

import Footer from './footer.js';
import Header from './header.js';

const PageLayout = ({children}) => {
  return (
    <Layout
      direction="column"
      h="100vh"
      mx="auto"
      p="m"
      spacing="l"
      w={['100%', '100%', 'widths.container']}
    >
      <Header />
      <Layout as="main" flex="auto" direction="column">
        {children}
      </Layout>
      <Footer />
    </Layout>
  );
};

export default PageLayout;
