import React from 'react';
import {Icon, Layout, Text} from 'uinix-ui';

import {repo} from '../data.js';
import ForkButton from './fork-button.js';
import StarButton from './star-button.js';
import Tabs from './tabs.js';
import WatchButton from './watch-button.js';

const Header = () => (
  <Layout
    as="header"
    bg="background.secondary"
    boxShadow="nav"
    color="text.primary"
    direction="column"
    px="l"
    pt="m"
    spacing="l"
  >
    <Layout align="center" justify="space-between" spacing="m">
      <Text as="h1" variant="title">
        <Layout align="center" spacing="s">
          <Icon icon="repo" size="icon.m" />
          <a href={`https://github.com/${user}/`}>{user}</a>
          <span>/</span>
          <a href={`https://github.com/${user}/${name}`}>
            <strong>{name}</strong>
          </a>
        </Layout>
      </Text>
      <Layout align="center" spacing="m">
        <WatchButton count={watchers} />
        <StarButton count={stars} />
        <ForkButton count={forks} />
      </Layout>
    </Layout>
    <Tabs />
  </Layout>
);

const {forks, name, stars, user, watchers} = repo;

export default Header;
