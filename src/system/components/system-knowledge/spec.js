import React from 'react';
import {Element, Layout, Text} from 'uinix-ui';

const Spec = ({name, value, render}) => {
  return (
    <Layout align="center" spacing="l">
      <Element flex="none" minW="spec.name">
        <Text variant="chip">{name}</Text>
      </Element>
      <Element flex="none">{render(value)}</Element>
      <Text variant="spec">{value}</Text>
    </Layout>
  );
};

export default Spec;
