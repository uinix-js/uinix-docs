import React from 'react';
import {Layout, useStyles} from 'uinix-ui';

import {channelGroups} from '../../data.js';
import ChannelGroup from './channel-group.js';
import Me from './me.js';

const ChannelsSidebar = () => {
  const styles = useStyles();
  return (
    <Layout
      as="nav"
      bg="background.secondary"
      direction="column"
      w="width.sidebar.channels"
    >
      <Layout
        as="h1"
        align="center"
        boxShadow="elevation.m"
        flex="none"
        h="height.header"
        px="m"
        styles={styles.stickyTop}
      >
        uinix-ui
      </Layout>
      <Layout direction="column" py="l" spacing="m" styles={styles.scrollable}>
        {channelGroups.map((channelGroup) => (
          <ChannelGroup key={channelGroup.name} channelGroup={channelGroup} />
        ))}
      </Layout>
      <Me />
    </Layout>
  );
};

export default ChannelsSidebar;
