import React from 'react';
import {noop} from 'uinix-fp';
import {Layout, Text} from 'uinix-ui';

import Avatar from './avatar.js';

const textVariants = {
  m: 'userMedium',
  l: 'userLarge',
};

const User = ({isConcise, user, size}) => {
  const {activity, avatarSrc, isBot, name, role, status} = user;
  const offlineStyle = status === 'offline' ? styles.offline : null;

  return (
    <Layout align="center" spacing="s" styles={[offlineStyle]} onClick={noop}>
      {!isConcise && <Avatar size={size} src={avatarSrc} status={status} />}
      <Layout direction="column">
        <Text truncate color={`user.role.${role}`} variant={textVariants[size]}>
          {name}
        </Text>
        {!isConcise && activity && (
          <Text truncate variant="userActivity">
            {activity}
          </Text>
        )}
      </Layout>
      {isBot && <Text variant="tag">Bot</Text>}
    </Layout>
  );
};

const styles = {
  offline: {
    opacity: 'inactive',
    transition: 'all.default',
    ':hover': {
      opacity: 'visible',
    },
  },
};

export default User;
