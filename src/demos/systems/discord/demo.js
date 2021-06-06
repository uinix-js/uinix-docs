import React from 'react';
import {Layout} from 'uinix-ui';

import ChannelsSidebar from './components/channels-sidebar/index.js';
import ChannelDetail from './components/channel-detail/index.js';
import Servers from './components/servers/index.js';

const Demo = () => {
  return (
    <Layout h="100vh">
      <Servers />
      <ChannelsSidebar />
      <ChannelDetail />
    </Layout>
  );
};

export default Demo;
