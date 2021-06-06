import React from 'react';
import {Layout} from 'uinix-ui';

import Aside from './aside.js';
import FileNav from './file-nav.js';
import Readme from './readme.js';
import Repo from './repo.js';

const Main = () => {
  return (
    <Layout as="main" mx="auto" px="l" spacing="l" styles={styles.main}>
      <Layout direction="column" spacing="m">
        <FileNav />
        <Repo />
        <Readme />
      </Layout>
      <Aside />
    </Layout>
  );
};

const styles = {
  main: {
    maxWidth: 'width.main',
    width: '100%',
  },
};

export default Main;
