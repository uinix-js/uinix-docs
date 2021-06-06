import React from 'react';
import {Element} from 'uinix-ui';

import avatarSrc from '../assets/images/avatar.jpg';

const Avatar = ({
  borderRadius = 'round',
  size,
  src = avatarSrc,
  status,
  statusBg = 'background.secondary',
}) => {
  const avatarSize = `avatar.${size}`;
  return (
    <Element borderRadius={borderRadius} position="relative">
      <Element
        as="img"
        borderRadius={borderRadius}
        h={avatarSize}
        src={src}
        w={avatarSize}
      />
      {status && (
        <Element
          bg={statusBg}
          borderRadius="round"
          bottom="xxs"
          p="xs"
          position="absolute"
          right={0}
        >
          <Element bg={`status.${status}`} borderRadius="round" p="xs" />
        </Element>
      )}
    </Element>
  );
};

export default Avatar;
