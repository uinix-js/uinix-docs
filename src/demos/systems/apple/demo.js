import React from 'react';
import {Layout} from 'uinix-ui';

import Footer from './components/footer.js';
import Header from './components/header.js';
import Main from './components/main.js';

const Demo = () => (
  <Layout direction="column">
    <Header />
    <Main />
    <Footer />
  </Layout>
);

export default Demo;
