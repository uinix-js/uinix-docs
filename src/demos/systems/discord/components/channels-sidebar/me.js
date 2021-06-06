import React, {useState} from 'react';
import {noop} from 'uinix-fp';
import {Layout, Icon} from 'uinix-ui';

import {users} from '../../data.js';
import User from '../user.js';

const Me = () => {
  const [shouldDeafen, setShouldDeafen] = useState(false);
  const [shouldMute, setShouldMute] = useState(false);

  return (
    <Layout
      align="center"
      bg="background.secondaryAlt"
      bottom={0}
      justify="space-between"
      p="s"
      position="sticky"
    >
      <User size="m" user={users[0]} />
      <Layout align="center" flex="none" spacing="s">
        <Icon
          icon={shouldDeafen ? 'undeafen' : 'deafen'}
          size="icon.m"
          onClick={() => setShouldDeafen(!shouldDeafen)}
        />
        <Icon
          icon={shouldMute ? 'unmute' : 'mute'}
          size="icon.m"
          onClick={() => setShouldMute(!shouldMute)}
        />
        <Icon icon="settings" size="icon.m" onClick={noop} />
      </Layout>
    </Layout>
  );
};

export default Me;
