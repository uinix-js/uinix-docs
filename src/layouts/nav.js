import React from 'react';
import {Link} from 'gatsby';
import {Icon, Layout, Text} from 'uinix-ui';

import {ResponsiveShow} from '../system/ui/index.js';

import {
  getGithubRepoLink,
  getLearnLink,
  getPackageLink,
} from '../utils/link.js';

const Nav = () => {
  return (
    <Layout
      as="nav"
      align="center"
      flex="auto"
      justify="space-between"
      spacing="m"
    >
      <Layout as="ol" spacing="m">
        <Text as="li" variant="nav">
          <Link to={getPackageLink()}>Packages</Link>
        </Text>
        <Text as="li" variant="nav">
          <Link to={getLearnLink()}>Learn</Link>
        </Text>
      </Layout>
      <ResponsiveShow>
        <Layout as="ol" spacing="m">
          <li>
            <a href={getGithubRepoLink()}>
              <Icon aria-label="Github" icon="github" size="icon.m" />
            </a>
          </li>
        </Layout>
      </ResponsiveShow>
    </Layout>
  );
};

export default Nav;
