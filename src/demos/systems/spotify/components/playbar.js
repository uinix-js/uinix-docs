import React from 'react';
import {Icon, Layout} from 'uinix-ui';

import {exampleTrack} from '../data.js';
import Play from './play.js';
import Repeat from './repeat.js';
import Shuffle from './shuffle.js';
import SongProgress from './song-progress.js';

const {current, duration} = exampleTrack;

const Playbar = () => {
  return (
    <Layout align="center" flex="auto" direction="column" spacing="s">
      <Layout align="center" spacing="l">
        <Shuffle />
        <Icon icon="previous" size="icon.m" variant="Icon.interactive" />
        <Play />
        <Icon icon="next" size="icon.m" variant="Icon.interactive" />
        <Repeat />
      </Layout>
      <SongProgress current={current} duration={duration} />
    </Layout>
  );
};

export default Playbar;
