import React from 'react';
import {Icon, Layout, useStyles} from 'uinix-ui';

import Progress from './progress.js';

const ExtraControls = () => {
  const styles = useStyles();
  return (
    <Layout
      align="center"
      justify="flex-end"
      spacing="m"
      styles={styles.footerSection}
    >
      <Icon icon="volume" size="icon.m" variant="icon.interactive" />
      <Progress max={10} value={4} width="width.volume" />
      <Icon icon="fullscreen" size="icon.m" variant="icon.interactive" />
    </Layout>
  );
};

export default ExtraControls;
