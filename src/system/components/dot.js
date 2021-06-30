import React from 'react';
import {Element} from 'uinix-ui';

const Dot = ({color, isBordered, size}) => {
  const dot = <Element bg={color} borderRadius="round" h={size} w={size} />;

  if (isBordered) {
    return (
      <Element b="bordered" borderRadius="round" p="xxs">
        {dot}
      </Element>
    );
  }

  return dot;
};

export default Dot;
