import React from 'react';
import {Element, Layout, Text} from 'uinix-ui';

import avatarSrc from '../assets/images/avatar.jpg';

const User = ({user}) => {
  const avatarSize = 'avatar.m';
  return (
    <Layout align="center" spacing="m">
      <Element
        as="img"
        borderRadius="round"
        h={avatarSize}
        src={user.avatar || avatarSrc}
        w={avatarSize}
      />
      <Text as="a" href="https://github.com/chrisrzhou" variant="linkBold">
        {user.name}
      </Text>
    </Layout>
  );
};

export default User;
