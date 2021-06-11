import React from 'react';
import {Element} from 'uinix-ui';

const Dot = ({color, size}) => {
  return <Element bg={color} borderRadius="round" h={size} w={size} />;
};

export default Dot;
