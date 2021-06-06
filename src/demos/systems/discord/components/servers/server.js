import React from 'react';
import {Icon, Layout, Text} from 'uinix-ui';

import Avatar from '../avatar.js';
import IndicatorLayout from '../indicator-layout.js';

const Server = ({server, isActive, onSelect}) => {
  const {
    hasAvatar,
    hasAction,
    hasNotification,
    icon,
    id,
    isInactive,
    name,
    type,
  } = server;

  const isDivider = type === 'divider';
  const isHome = type === 'home';

  if (isDivider) {
    return <hr />;
  }

  let item;
  switch (type) {
    case 'home':
      item = <Icon icon={icon} size="icon.logo" />;
      break;
    case 'add':
    case 'download':
    case 'explore':
      item = <Icon icon={icon} size="icon.l" />;
      break;
    default:
      item = hasAvatar ? (
        <Avatar borderRadius="inherit" size="l" />
      ) : (
        <Text variant="server">{name[0]}</Text>
      );
  }

  let bg = 'background.primary';
  let color = 'text.normal';
  if (isHome) {
    bg = 'brand.blurple';
  } else if (isActive) {
    bg = hasAction ? 'tone.success' : 'brand.blurple';
  } else {
    color = hasAction ? 'tone.success' : 'text.normal';
  }

  const backgroundHoverColor = hasAction ? 'tone.success' : 'brand.blurple';
  const borderRadius = isActive ? 'l' : 'round';
  const size = 'avatar.l';

  return (
    <IndicatorLayout
      enableHover
      as="li"
      align="center"
      hasIndicator={hasNotification}
      isActive={isActive}
      justify="center"
    >
      <Layout
        align="center"
        bg={bg}
        borderRadius={borderRadius}
        color={color}
        h={size}
        justify="center"
        w={size}
        styleProps={{backgroundHoverColor, isActive, isInactive}}
        styles={[styles.hover, styles.inactive]}
        title={name}
        onClick={() => onSelect(id)}
      >
        {item}
      </Layout>
    </IndicatorLayout>
  );
};

const styles = {
  hover: ({backgroundHoverColor}) => ({
    transition: 'all.default',
    ':hover': {
      backgroundColor: backgroundHoverColor,
      borderRadius: 'l',
      color: 'brand.fullWhite',
    },
  }),
  inactive: ({isInactive}) => ({
    filter: isInactive ? 'grayscale(1)' : undefined,
  }),
};

export default Server;
