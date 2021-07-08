import React from 'react';
import {Text} from 'uinix-ui';

const GrayLink = ({children, href}) => (
  <Text as="a" href={href} variant="grayLink">
    {children}
  </Text>
);

export default GrayLink;
