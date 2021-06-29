import React from 'react';
import {Element, Layout, Text} from 'uinix-ui';

const Spec = ({children, name, value}) => {
  return (
    <Layout align="center" spacing="m">
      <Element flex="none" minW="spec.name">
        <Text variant="chip">{name}</Text>
      </Element>
      {children}
      <Text variant="description" minW="spec.value">
        {value}
      </Text>
    </Layout>
  );
};

export default Spec;
