import React from 'react';
import {Icon, Layout, Text} from 'uinix-ui';

const Breadcrumbs = () => {
  return (
    <Layout as="nav">
      <Layout as="ul" align="center" color="text.secondary" spacing="x2">
        <li>
          <Text as="a" href="https://www.apple.com" variant="textLink">
            <Icon icon="logo" size="icon.s" />
          </Text>
        </li>
        <Icon color="border.dark" icon="chevronRight" size="icon.m" />
        <li>
          <Text as="a" href="https://www.apple.com/mac/" variant="textLink">
            Mac
          </Text>
        </li>
        <Icon color="border.dark" icon="chevronRight" size="icon.m" />
        <li>
          <Text variant="textLink">Compare</Text>
        </li>
      </Layout>
    </Layout>
  );
};

export default Breadcrumbs;
