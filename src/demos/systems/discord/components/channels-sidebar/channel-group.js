import React, {useState} from 'react';
import {noop} from 'uinix-fp';
import {Icon, Layout, Text} from 'uinix-ui';

import Channels from './channels.js';

const ChannelGroup = ({channelGroup}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const {channels, name} = channelGroup;

  return (
    <Layout as="section" color="channel.default" direction="column">
      <Layout align="center" justify="space-between" p="xs" spacing="s">
        <Layout
          align="center"
          flex="auto"
          spacing="s"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <Icon
            icon="chevronDown"
            size="icon.s"
            styleProps={{isCollapsed}}
            styles={styles.collapsible}
          />
          <Text as="h2" onClick={noop}>
            {name}
          </Text>
        </Layout>
        <Icon icon="plus" size="icon.m" onClick={noop} />
      </Layout>
      {!isCollapsed && <Channels channels={channels} />}
    </Layout>
  );
};

const styles = {
  collapsible: ({isCollapsed}) => ({
    transform: isCollapsed ? 'rotateNegative90' : undefined,
    transition: 'all.default',
  }),
};

export default ChannelGroup;
