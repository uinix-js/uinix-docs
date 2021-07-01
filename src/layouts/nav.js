import React from 'react';
import {Link} from 'gatsby';
import {Element, Icon, Layout} from 'uinix-ui';

import {coerceLinks, getRepoLink} from '../utils/index.js';

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
        {coerceLinks(['Packages', 'Demos', 'Learn'], {
          hasLeadingSlash: true,
        }).map(({text, to}) => (
          <Element key={to} as="li" variant="nav.item">
            <Link to={to}>{text}</Link>
          </Element>
        ))}
      </Layout>
      <Layout as="ol" spacing="m" variant="nav.list">
        <Element as="li" variant="nav.item">
          <a href={getRepoLink()}>
            <Icon icon="github" size="icon.m" title="Github" />
          </a>
        </Element>
      </Layout>
    </Layout>
  );
};

export default Nav;
