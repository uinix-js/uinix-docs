import React from 'react';
import {noop} from 'uinix-fp';
import {Icon, Layout, Text} from 'uinix-ui';

const Header = () => (
  <Layout
    as="header"
    bg="background.gray4"
    justify="flex-end"
    position="sticky"
    px="l"
    py="m"
    right={0}
    top={0}
    z="forward"
  >
    <Layout
      align="center"
      bg="background.gray2"
      borderRadius="pill"
      px="s"
      py="xxs"
      spacing="m"
      onClick={noop}
    >
      <Icon icon="user" size="icon.m" variant="icon.interactive" />
      <Text color="text.primary" fontWeight="bold" variant="m">
        John Doe
      </Text>
      <Icon icon="arrowDown" size="icon.m" variant="icon.interactive" />
    </Layout>
  </Layout>
);

export default Header;
