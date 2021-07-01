import React from 'react';
import {Layout, Text} from 'uinix-ui';

import {BrandLink} from '../system/components/index.js';
import Nav from './nav.js';

const Header = ({isFullWidth}) => {
  return (
    <Layout
      as="header"
      bg="background.primary"
      boxShadow="s"
      left={0}
      position="fixed"
      right={0}
      top={0}
      z="header"
    >
      <Layout
        align="baseline"
        direction={['column', 'column', 'row']}
        py="s"
        spacing="m"
        variant={isFullWidth ? 'layout.fullWidth' : 'layout.container'}
      >
        <Text as="h1" variant="brand">
          <BrandLink />
        </Text>
        <Nav />
      </Layout>
    </Layout>
  );
};

export default Header;
