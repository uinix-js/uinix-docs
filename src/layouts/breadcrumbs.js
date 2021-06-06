import {Link} from 'gatsby';
import React from 'react';
import {i} from 'uinix-fp';
import {Element, Text, useStyles} from 'uinix-ui';

import {BrandText} from '../system/components/index.js';
import {capitalize} from '../utils/capitalize.js';
import {coerceWindowValue} from '../utils/coerce-window-value.js';

const Breadcrumbs = () => {
  const styles = useStyles();

  const pathname = coerceWindowValue('location.pathname', '');
  const crumbs = getCrumbs(pathname);

  return (
    <Text as="h2" styles={styles.unset}>
      <nav>
        <Element as="ol" variant="nav.list">
          {crumbs.map(({label, to}, i, array) => {
            const isLastCrumb = i === array.length - 1;
            const isOnlyCrumb = array.length === 1;

            const color = isOnlyCrumb ? 'text.primary' : 'text.light';
            const fontWeight = isOnlyCrumb || !isLastCrumb ? 'bold' : undefined;
            const crumb = <BrandText text={label} />;

            return (
              <Element key={to} as="li" variant="nav.list.item">
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
