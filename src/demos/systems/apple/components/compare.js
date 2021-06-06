import React from 'react';
import {Layout} from 'uinix-ui';

import {models} from '../data.js';
import Container from './container.js';
import CompareGroup from './compare-group.js';

const Compare = () => {
  return (
    <Container>
      <Layout as="section" direction="column" flex="auto" spacing="x30">
        {Object.entries(specDisplayData).map(([spec, {footnote, title}]) => (
          <CompareGroup
            key={spec}
            footnote={footnote}
            models={models}
            spec={spec}
            title={title}
          />
        ))}
      </Layout>
    </Container>
  );
};

const specDisplayData = {
  compute: {
    title: 'Compute',
  },
  memory: {
    title: 'Memory',
  },
  storage: {
    title: 'Storage',
    footnote: 3,
  },
  display: {
    title: 'Display',
  },
  dimensions: {
    title: 'Size and Weight',
    footnote: 4,
  },
  camera: {
    title: 'Camera',
  },
  audio: {
    title: 'Audio',
  },
  input: {
    title: 'Keyboard and Trackpad',
  },
  wireless: {
    title: 'Wireless',
  },
  ports: {
    title: 'Ports',
  },
  authentication: {
    title: 'Secure Authentication',
  },
  applePay: {
    title: 'Apple Pay',
  },
  videoCalling: {
    title: 'Video Calling',
  },
  audioCalling: {
    title: 'Audio Calling',
  },
  siri: {
    title: 'Siri',
  },
  power: {
    title: 'Power and Battery',
    footnote: 5,
  },
};

export default Compare;
