import React from 'react';
import {isPlainObject} from 'uinix-fp';
import {Element, Layout, Text} from 'uinix-ui';

const Spec = ({name, value, render}) => {
  return (
    <Layout align="center" spacing="l">
      <Element flex="none" minW="spec.name">
        <Text variant="chip">{name}</Text>
      </Element>
      <Element flex="none">{render(value)}</Element>
      <Text variant="spec">
        {isPlainObject(value) ? (
          <pre>{JSON.stringify(value, null, 2)}</pre>
        ) : (
          value
        )}
      </Text>
    </Layout>
  );
};

export default Spec;
