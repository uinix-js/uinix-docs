import React from 'react';
import {Layout, useStyles} from 'uinix-ui';

import BrandText from '../../components/ui/brand-text.js';
import Emoji from '../../components/ui/emoji.js';
import {UINIX_UI_REPO} from '../../links.js';

const Demo = () => {
  const styles = useStyles();
  return (
    <Layout direction="column" p="m" styles={styles.container}>
      <p>
        This entire site is built with this UI system. A UI system that builds a
        system to preview other UI systems. How fun!{' '}
        <Emoji emoji="smilingFaceWithSmilingEye" />
      </p>
      <p>
        This is a simple and minimalist system. It focuses on defining proper
        styles for semantic HTML elements which supports a unified UIUX for both
        HTML elements and composed components. It is also accessible!
      </p>
      <p>
        For more details on the <BrandText text="uinix-ui" /> philosophy of
        building UIs, please vist the Github <a href={UINIX_UI_REPO}>repo</a>.
      </p>
    </Layout>
  );
};

export default Demo;
