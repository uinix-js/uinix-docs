import {Link} from 'gatsby';
import React from 'react';
import {i} from 'uinix-fp';
import {Element, Layout, Text} from 'uinix-ui';

import {BrandText} from '../system/components/index.js';
import {capitalize} from '../utils/capitalize.js';

const Breadcrumbs = () => {
  const crumbs = getCrumbs(window.location.pathname);

  return (
    <Text as="h2" m={0}>
      <nav>
        <Layout as="ol" variant="nav.list">
          {crumbs.map(({label, to}, i, array) => (
            <Element key={to} as="li" variant="nav.list.item">
              {i < array.length - 1 ? (
                <Link to={to}>
                  <BrandText text={label} />
                </Link>
              ) : (
                <BrandText text={label} />
              )}
            </Element>
          ))}
        </Layout>
      </nav>
    </Text>
  );
};

const getCrumbs = (pathname) => {
  let to = '/';
  return pathname
    .split('/')
    .filter(i)
    .map((part, i, array) => {
      const slash = i < array.length - 1 ? '/' : '';
      const path = `${part}${slash}`;
      to += path;
      const label = i === 0 ? capitalize(path) : path;
      return {label, to};
    });
};

export default Breadcrumbs;
