import React from 'react';
import {Link} from 'gatsby';
import {Element, Icon, Layout} from 'uinix-ui';

import {ResponsiveShow} from '../system/components/index.js';

import {getGithubRepoLink} from '../utils/link.js';

const links = [
  {
    label: 'Packages',
    to: '/packages',
  },
  {
    label: 'Systems',
    to: '/systems',
  },
  {
    label: 'Learn',
    to: '/learn',
  },
];

const Nav = () => {
  return (
    <Layout
      as="nav"
      align="center"
      flex="auto"
      justify="space-between"
      spacing="m"
    >
      <Layout as="ol" spacing="m" variant="nav.list">
        {links.map(({label, to}) => (
          <Element key={to} as="li" variant="nav.list.item">
            <Link to={to}>{label}</Link>
          </Element>
        ))}
      </Layout>
        <Layout as="ol" spacing="m" variant="nav.list">
          <Element as="li" variant="nav.list.item">
            <a href={getGithubRepoLink()}>
              <Icon aria-label="Github" icon="github" size="icon.m" />
            </a>
          </Element>
        </Layout>
    </Layout>
  );
};

export default Nav;
