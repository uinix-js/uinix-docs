import React from 'react';
import {Layout, Text} from 'uinix-ui';

const Chips = ({chips}) => (
  <Layout wrap spacing="s" wrapSpacing="xs">
    {chips.map((chip) => (
      <Text key={chip} variant="chip.primary">
        {chip}
      </Text>
    ))}
  </Layout>
);

export default Chips;
