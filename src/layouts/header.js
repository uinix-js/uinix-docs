import React from 'react';
import {Layout, Text} from 'uinix-ui';

import {BrandLink} from '../system/components/index.js';
import Nav from './nav.js';

const Header = () => {
  return (
    <Layout
      as="header"
      align="baseline"
      direction={['column', 'column', 'row']}
      spacing="m"
    >
      <Text as="h1" py="s" variant="brand">
        <BrandLink />
      </Text>
      <Nav />
    </Layout>
  );
};

export default Header;
