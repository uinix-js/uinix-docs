import React from 'react';
import {Text} from 'uinix-ui';

const Alphabet = ({color, value}) => (
  <Text color={`brand.${color}`} variant="alphabet">
    {value}
  </Text>
);

export default Alphabet;
