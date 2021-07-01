import {Link} from 'gatsby';
import React from 'react';
import {i} from 'uinix-fp';
import {Element, Text} from 'uinix-ui';

import {BrandText} from '../system/components/index.js';
import {capitalize, coerceWindowValue} from '../utils/index.js';

const Breadcrumbs = () => {
  const pathname = coerceWindowValue('location.pathname', '');

  let to = '/';
  const crumbs = pathname
    .split('/')
    .filter(i)
    .map((subpath, i, array) => {
      const slash = i < array.length - 1 ? '/' : '';
      const path = `${subpath}${slash}`;
      to += path;
      const text = i === 0 ? capitalize(path) : path;
      return {text, to};
    });

  return (
    <Text as="h2" variant="headingLink">
      <nav>
        <Element as="ol" variant="nav.list">
          {crumbs.map(({text, to}, i, array) => {
            const isLastCrumb = i === array.length - 1;
            const isOnlyCrumb = array.length === 1;

            const color = isOnlyCrumb ? 'text.primary' : 'text.light';
            const fontWeight = isOnlyCrumb || !isLastCrumb ? 'bold' : 'regular';
            const crumb = <BrandText text={text} />;

            return (
              <Element key={to} as="li" variant="nav.item">
                <Text color={color} fontWeight={fontWeight}>
                  {isLastCrumb ? crumb : <Link to={to}>{crumb}</Link>}
                </Text>
              </Element>
            );
          })}
        </Element>
      </nav>
    </Text>
  );
};

export default Breadcrumbs;
