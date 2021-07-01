import React from 'react';
import {Link} from 'gatsby';
import {Element, Icon, Layout} from 'uinix-ui';

import {coerceLinks, getRepoLink} from '../utils/index.js';

const Nav = () => {
  return (
    <nav>
      <Layout
        as="ol"
        align="center"
        flex="auto"
        justify="space-between"
        spacing="m"
        variant="nav.list"
      >
        {coerceLinks(['Packages', 'Demos', 'Learn'], {
          hasLeadingSlash: true,
        }).map(({text, to}) => (
          <Element key={to} as="li" variant="nav.item">
            <Link to={to}>{text}</Link>
          </Element>
        ))}
        <Element as="li" variant="nav.item">
          <a href={getRepoLink()}>
            <Icon icon="github" size="icon.m" title="Github" />
          </a>
        </Element>
      </Layout>
    </nav>
  );
};

export default Nav;
