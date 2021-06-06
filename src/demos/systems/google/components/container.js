import React from 'react';
import {Element} from 'uinix-ui';

const Container = ({children}) => {
  return (
    <Element flex="none" ml="offset.containerLeft" w="width.container">
      {children}
    </Element>
  );
};

export default Container;
