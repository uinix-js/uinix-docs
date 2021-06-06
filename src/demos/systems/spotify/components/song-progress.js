import React from 'react';
import {Layout, Text} from 'uinix-ui';

import Progress from './progress.js';

const SongProgress = ({current, duration}) => {
  return (
    <Layout align="center" alignSelf="stretch" spacing="m">
      <Text variant="xs">{formatTime(current)}</Text>
      <Progress max={duration} value={current} />
      <Text variant="xs">{formatTime(duration)}</Text>
    </Layout>
  );
};

const formatTime = (seconds) => {
  const format = (value) => `${Math.floor(value)}`.slice(-2);
  const minutes = (seconds % 3600) / 60;
  return [minutes, seconds % 60].map(format).join(':');
};

export default SongProgress;
