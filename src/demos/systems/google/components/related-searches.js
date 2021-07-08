import React from 'react';
import {noop} from 'uinix-fp';
import {Icon, Layout, Text} from 'uinix-ui';

import {relatedSearches} from '../data.js';
import RelatedSearch from './releated-search.js';

const RelatedSearches = () => (
  <Layout direction="column" spacing="x6">
    <Layout align="center" spacing="x4">
      <Text as="h3" fontFamily="google" variant="subtitle">
        Related searches
      </Text>
      <Icon
        color="icon.default"
        icon="more"
        size="icon.m"
        title="Settings"
        onClick={noop}
      />
    </Layout>
    <Layout wrap spacing="x4" wrapSpacing="x2">
      {relatedSearches.map((key) => (
        <RelatedSearch key={key} />
      ))}
    </Layout>
  </Layout>
);

export default RelatedSearches;
