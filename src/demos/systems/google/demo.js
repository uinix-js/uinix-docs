import React from 'react';
import {Layout} from 'uinix-ui';

import Footer from './components/footer.js';
import Header from './components/header.js';
import Main from './components/main.js';
import Tabs from './components/tabs.js';

const Demo = () => (
  <Layout direction="column">
    <Layout direction="column" spacing="x6">
      <Header />
      <Tabs />
    </Layout>
    <Main />
    <Footer />
  </Layout>
);

export default Demo;
