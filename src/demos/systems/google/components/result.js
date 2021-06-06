import React from 'react';
import {noop} from 'uinix-fp';
import {Icon, Layout, Text} from 'uinix-ui';

import {LOREM_IPSUM, LOREM_IPSUM_FULL} from '../data.js';

const Result = ({type = 'default'}) => {
  switch (type) {
    default:
      return (
        <Layout color="text.secondary" direction="column" spacing="x1">
          <a href="#top">
            <Layout align="center" spacing="x4">
              <Text as="cite" color="text.secondary">
                https://www.google.com/search?q={LOREM_IPSUM}
              </Text>
              <Icon
                color="icon.default"
                icon="more"
                size="icon.s"
                title="Settings"
                onClick={noop}
              />
            </Layout>
            <Text as="h3" variant="subtitle">
              {LOREM_IPSUM}
            </Text>
          </a>
          <div>{LOREM_IPSUM_FULL}</div>
        </Layout>
      );
  }
};

export default Result;
