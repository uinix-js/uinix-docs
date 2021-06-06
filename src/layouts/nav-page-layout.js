import {Link} from 'gatsby';
import React from 'react';
import {Layout, Text} from 'uinix-ui';

import {BrandText, Chips} from '../system/components/index.js';
import PageLayout from './page-layout.js';

const NavPageLayout = ({description, links}) => {
  return (
    <PageLayout>
      <p>{description}</p>
      <nav>
        <Layout as="ul" align="flex-start" direction="column">
          {links.map(({description, label, tags, to}) => (
            <li key={to}>
              <Layout align="flex-start" direction="column" spacing="xs">
                <Link to={to}>
                  <BrandText text={label} />
                </Link>
                {description && (
                  <Text variant="description">{description}</Text>
                )}
                {tags && <Chips chips={tags} />}
              </Layout>
            </li>
          ))}
        </Layout>
      </nav>
    </PageLayout>
  );
};

export default NavPageLayout;
