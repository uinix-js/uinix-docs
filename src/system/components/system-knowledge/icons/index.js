import React from 'react';
import {Icon, Layout, Text} from 'uinix-ui';

const Icons = ({icons}) => {
  return (
    <Layout wrap spacing="l" wrapSpacing="l">
      {Object.entries(icons).map(([icon, svg]) => (
        <Layout
          key={icon}
          align="center"
          direction="column"
          spacing="s"
          w="width.spec"
        >
          <Icon icon={icon} size="icon.l" />
          <Text variant="chip">{icon}</Text>
        </Layout>
      ))}
    </Layout>
  );
};

export default Icons;
