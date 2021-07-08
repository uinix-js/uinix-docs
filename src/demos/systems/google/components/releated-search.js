import React from 'react';
import {Icon, Layout, Text} from 'uinix-ui';

import {LOREM_IPSUM} from '../data.js';

const RelatedSearch = () => (
  <Layout
    align="center"
    bg="background.wash"
    borderRadius="pill"
    flex="0 0 45%"
    px="x6"
    py="x3"
    spacing="x6"
  >
    <Icon
      color="icon.default"
      icon="search"
      size="icon.m"
      title="related search"
    />
    <Text variant="subtitle2">{LOREM_IPSUM}</Text>
  </Layout>
);

export default RelatedSearch;
