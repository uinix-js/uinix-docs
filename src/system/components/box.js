import React from 'react';
import {Element} from 'uinix-ui';

const Box = ({children, styles}) => {
  return (
    <Element b="bordered" my="s" px="l" py="m" styles={styles}>
      {children}
    </Element>
  );
};

export default Box;
