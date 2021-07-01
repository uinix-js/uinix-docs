import React from 'react';
import {noop} from 'uinix-fp';
import {Icon, Layout, Text} from 'uinix-ui';

import Container from './container.js';

const Header = () => {
  return (
    <Layout as="header" bg="background.inverse" color="text.inverse">
      <Container as="ul" align="center" justify="space-between" py="x3">
        {navItems.map(({href, icon, label, onClick}, i) => {
          return (
            <Text
              key={i}
              as={href ? 'a' : 'div'}
              href={href}
              variant="headerLink"
              onClick={onClick}
            >
              {icon ? <Icon icon={icon} size="icon.m" /> : <Text>{label}</Text>}
            </Text>
          );
        })}
      </Container>
    </Layout>
  );
};

const navItems = [
  {
    icon: 'logo',
    href: 'https://www.apple.com/',
  },
  {
    href: 'https://www.apple.com/mac/',
    label: 'Mac',
  },
  {
    href: 'https://www.apple.com/ipad/',
    label: 'iPad',
  },
  {
    href: 'https://www.apple.com/iphone/',
    label: 'iPhone',
  },
  {
    href: 'https://www.apple.com/watch/',
    label: 'Watch',
  },
  {
    href: 'https://www.apple.com/tv/',
    label: 'TV',
  },
  {
    href: 'https://www.apple.com/music/',
    label: 'Music',
  },
  {
    href: 'https://support.apple.com/',
    label: 'Support',
  },
  {
    icon: 'search',
    onClick: noop,
  },
  {
    icon: 'shop',
    onClick: noop,
  },
];

export default Header;
