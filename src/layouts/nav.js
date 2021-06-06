import React from 'react';
import {Link} from 'gatsby';
import {Element, Icon, Layout} from 'uinix-ui';

import {routes} from '../../routes.js';
import {getGithubRepoLink} from '../utils/link.js';
import {slugify} from '../utils/slugify.js';

const links = routes.map(({name}) => ({name, to: `/${slugify(name)}`}));

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
        {links.map(({name, to}) => (
          <Element key={to} as="li" variant="nav.list.item">
            <Link to={to}>{name}</Link>
          </Element>
        ))}
      </Layout>
      <Layout as="ol" spacing="m" variant="nav.list">
        <Element as="li" variant="nav.list.item">
          <a href={getGithubRepoLink()}>
            <Icon icon="github" size="icon.m" title="Github" />
          </a>
        </Element>
      </Layout>
    </Layout>
  );
};

export default Nav;
