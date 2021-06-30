import React from 'react';
import {Element} from 'uinix-ui';

const Box = ({children, styles}) => {
  const style = {
    border: 'bordered',
  };
  return (
    <Element my="s" px="l" py="m" styles={[style, styles]}>
      {children}
    </Element>
  );
};

export default Box;
