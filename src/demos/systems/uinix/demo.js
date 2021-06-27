import React from 'react';
import {Layout, useStyles} from 'uinix-ui';

import {BrandLink} from '../../../system/components/index.js';

const Demo = () => {
  const styles = useStyles();
  return (
    <Layout direction="column" p="m" styles={styles.container}>
      <p>
        This entire site is built with the{' '}
        <BrandLink to="/packages/uinix-ui" text="uinix-ui" /> UI system. A UI
        system that builds a system to preview other UI systems. How fun! 🤗
      </p>
      <p>
        Explore the site to continue learning how to build UIs with the{' '}
        <BrandLink />.
      </p>
    </Layout>
  );
};

export default Demo;
