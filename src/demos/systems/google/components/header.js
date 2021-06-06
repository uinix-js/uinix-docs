import React from 'react';
import {Layout} from 'uinix-ui';

import Logo from './logo.js';
import Search from './search.js';
import Settings from './settings.js';
import SignIn from './sign-in.js';

const Header = () => {
  return (
    <Layout
      as="header"
      align="center"
      justify="space-between"
      pt="x6"
      px="x6"
      spacing="x4"
    >
      <Layout align="center" spacing="x8">
        <Logo />
        <Search />
      </Layout>
      <Layout align="center" spacing="x4">
        <Settings />
        <SignIn />
      </Layout>
    </Layout>
  );
};

export default Header;
