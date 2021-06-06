import React from 'react';
import {Layout} from 'uinix-ui';

import {exampleTrack} from '../data.js';
import ExtraControls from './extra-controls.js';
import Playbar from './playbar.js';
import SongPlaying from './song-playing.js';

const Footer = () => {
  return (
    <Layout
      as="footer"
      align="center"
      bg="background.gray3"
      bt="bordered"
      bottom={0}
      h="height.footer"
      justify="space-between"
      position="sticky"
      px="m"
      spacing="xl"
    >
      <SongPlaying artist={exampleTrack.artist} song={exampleTrack.song} />
      <Playbar />
      <ExtraControls />
    </Layout>
  );
};

export default Footer;
