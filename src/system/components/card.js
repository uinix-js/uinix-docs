import React from 'react';
import {Element} from 'uinix-ui';

const Card = ({children}) => {
  return (
    <Element b="bordered" borderRadius="m" boxShadow="m" p="m">
      {children}
    </Element>
  );
};

export default Card;
