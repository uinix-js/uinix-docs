import React from 'react';
import {Element} from 'uinix-ui';

const Progress = ({max, width = '100%', value}) => (
  <Element
    bg="background.gray2"
    borderRadius="m"
    h="height.bar"
    position="relative"
    styles={styles.barHover}
    w={width}
  >
    <Element
      bg="background.gray0"
      borderRadius="m"
      className="progress"
      h="100%"
      left={0}
      position="absolute"
      w={`${(value / max) * 100}%`}
    />
  </Element>
);

const styles = {
  barHover: {
    ':hover .progress': {
      backgroundColor: 'brand.primary',
    },
  },
};

export default Progress;
