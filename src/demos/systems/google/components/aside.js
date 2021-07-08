import React from 'react';
import {noop} from 'uinix-fp';
import {Icon, Layout, Text} from 'uinix-ui';

import {LOREM_IPSUM, LOREM_IPSUM_FULL} from '../data.js';
import CardSection from './card-section.js';

const Aside = () => (
  <Layout align="flex-end" direction="column" spacing="x1">
    <Layout
      b="bordered"
      borderRadius="l"
      direction="column"
      flex="none"
      w="width.aside"
    >
      <CardSection>
        <Layout align="center" justify="space-between">
          <Text as="h2" variant="title">
            {LOREM_IPSUM}
          </Text>
          <Icon
            color="icon.default"
            icon="share"
            size="icon.l"
            onClick={noop}
          />
        </Layout>
        <Text variant="gray">{LOREM_IPSUM}</Text>
      </CardSection>
      <CardSection>{LOREM_IPSUM_FULL}</CardSection>
      <CardSection>{LOREM_IPSUM_FULL}</CardSection>
      <CardSection>{LOREM_IPSUM_FULL}</CardSection>
    </Layout>
    <Text variant="gray" onClick={noop}>
      Feedback
    </Text>
  </Layout>
);

export default Aside;
