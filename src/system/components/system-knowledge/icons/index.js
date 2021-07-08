import React from 'react';
import {Icon, Layout, Text} from 'uinix-ui';

const Icons = ({icons}) => (
  <Layout wrap spacing="l" wrapSpacing="l">
    {Object.keys(icons).map((icon) => (
      <Layout
        key={icon}
        align="center"
        direction="column"
        spacing="s"
        w="spec.icon"
      >
        <Icon icon={icon} size="icon.l" />
        <Text variant="chip">{icon}</Text>
      </Layout>
    ))}
  </Layout>
);

export default Icons;
