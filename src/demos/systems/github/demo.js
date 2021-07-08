import React from 'react';
import {Layout} from 'uinix-ui';

import Header from './components/header.js';
import Main from './components/main.js';
import Footer from './components/footer.js';

const Demo = () => (
  <Layout direction="column" spacing="l">
    <Header />
    <Main />
    <Footer />
  </Layout>
);

export default Demo;
