import React from 'react';
import {Layout} from 'uinix-ui';

import Header from './components/header.js';
import Footer from './components/footer.js';
import Main from './components/main.js';
import Nav from './components/nav.js';

const Demo = () => (
  <Layout direction="column">
    <Layout>
      <Nav />
      <Layout direction="column">
        <Header />
        <Main />
      </Layout>
    </Layout>
    <Footer />
  </Layout>
);

export default Demo;
