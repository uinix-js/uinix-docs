import React from 'react';
import {Element, Layout, Text} from 'uinix-ui';

import {BrandLink} from '../system/components/index.js';
import Nav from './nav.js';

const Header = () => (
  <Layout as="header" direction="column" py="s">
    <Layout align="baseline" justify="space-between" spacing="l">
      <Layout align="baseline" spacing="m">
        <Text as="h1" variant="brand">
          <BrandLink />
        </Text>
        <Element display={['none', 'none', 'block']}>
          <Nav />
        </Element>
      </Layout>
    </Layout>
    <Element display={['block', 'block', 'none']} py="xs">
      <Nav />
    </Element>
  </Layout>
);

export default Header;
