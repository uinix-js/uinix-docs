import React from 'react';
import {isPlainObject} from 'uinix-fp';
import {Icon, Layout, Text} from 'uinix-ui';

const renderIcon = (icon) => (
  <Layout
    key={icon}
    align="center"
    direction="column"
    spacing="s"
    w="width.spec"
  >
    <Icon icon={icon} size="icon.l" />
    <Text variant="chip.primary">{icon}</Text>
  </Layout>
);

const renderIcons = (icons, path = '') =>
  Object.entries(icons).map(([key, value]) => {
    const icon = path ? `${path}.${key}` : key;
    return isPlainObject(value)
      ? renderIcons(icons[key], icon)
      : renderIcon(icon);
  });

const Icons = ({icons}) => (
  <Layout wrap spacing="l" wrapSpacing="l">
    {renderIcons(icons)}
  </Layout>
);

export default Icons;
