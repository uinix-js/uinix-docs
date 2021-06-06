import React, {useState} from 'react';
import {Element, Layout, useStyles} from 'uinix-ui';

import {servers} from '../../data.js';
import Server from './server.js';

const Servers = () => {
  const [activeServer, setActiveServer] = useState(servers[0].id);
  const styles = useStyles();

  return (
    <Element as="nav" bg="background.tertiary">
      <Layout
        as="ul"
        align="center"
        direction="column"
        py="m"
        spacing="s"
        styleProps={{scrollbarWidth: 'none '}}
        styles={[styles.scrollable, styles.stickyTop]}
        w="width.sidebar.servers"
      >
        {servers.map((server) => (
          <Server
            key={server.id}
            isActive={server.id === activeServer}
            server={server}
            onSelect={setActiveServer}
          />
        ))}
      </Layout>
    </Element>
  );
};

export default Servers;
