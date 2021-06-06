import React, {useState} from 'react';
import {noop} from 'uinix-fp';
import {Icon, Layout, Text, useStyles} from 'uinix-ui';

import Search from './search.js';

const Header = ({shouldShowMembers, onToggleMembers}) => {
  const [shouldMute, setShouldMute] = useState(false);
  const styles = useStyles();

  const iconSize = 'icon.l';

  return (
    <Layout
      align="center"
      boxShadow="elevation.m"
      flex="none"
      h="height.header"
      justify="space-between"
      px="m"
      spacing="m"
      styles={styles.stickyTop}
    >
      <Layout align="center" spacing="s">
        <Icon color="text.muted" icon="channel" size={iconSize} />
        <Text as="h3">uinix-ui</Text>
      </Layout>
      <Layout align="center" color="interactive.normal" spacing="m">
        <Icon
          icon={shouldMute ? 'unmute2' : 'mute2'}
          size={iconSize}
          onClick={() => setShouldMute(!shouldMute)}
        />
        <Icon icon="pin" size={iconSize} onClick={noop} />
        <Icon
          color={shouldShowMembers ? 'interactive.active' : undefined}
          icon="members"
          size={iconSize}
          onClick={onToggleMembers}
        />
        <Search />
        <Icon icon="inbox" size={iconSize} onClick={noop} />
        <Icon icon="help" size={iconSize} onClick={noop} />
      </Layout>
    </Layout>
  );
};

export default Header;
