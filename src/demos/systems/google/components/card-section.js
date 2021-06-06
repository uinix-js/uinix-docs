import React from 'react';
import {Element} from 'uinix-ui';

const CardSection = ({children}) => {
  return (
    <Element as="section" bb="bordered" p="x4">
      {children}
    </Element>
  );
};

export default CardSection;
