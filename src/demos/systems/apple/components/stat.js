import React from 'react';
import {Element, Layout, Text} from 'uinix-ui';

import touchId from '../assets/images/icon-touch.png';
import touchBarAndTouchId from '../assets/images/icon-touch-bar.png';
import Footnote from './footnote.js';

const images = {
  touchId,
  touchBarAndTouchId,
};

const Stat = ({stat}) => {
  const {description, footnote, isExact, value} = stat;
  const imageSrc = images[value];

  return (
    <Layout
      align="center"
      direction="column"
      h="height.badge"
      justify="center"
      spacing="x2"
    >
      <Text variant="badgeInfo">{isExact ? '' : 'Up to'}</Text>
      {imageSrc ? (
        <Element as="img" h="icon.image" src={imageSrc} />
      ) : (
        <Text variant="badge">{value}</Text>
      )}
      <Text variant="badgeInfo">
        {description}
        {footnote && <Footnote footnote={footnote} />}
      </Text>
    </Layout>
  );
};

export default Stat;
