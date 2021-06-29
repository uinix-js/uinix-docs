import React from 'react';
import {Element} from 'uinix-ui';

const Bar = ({w}) => {
  return (
    <Element
      bg="background.tones.faded"
      b="bordered"
      flex="none"
      py="s"
      w={w}
    />
  );
};

export default Bar;
