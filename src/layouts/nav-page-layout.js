import {Link} from 'gatsby';
import React from 'react';
import {Layout, Text} from 'uinix-ui';

import {BrandText, Chips, Markdown} from '../system/components/index.js';
import PageLayout from './page-layout.js';

const NavPageLayout = ({description, links}) => {
  return (
    <PageLayout>
      <Markdown content={description} />
      <nav>
        <Layout as="ul" align="flex-start" direction="column">
          {links.map(({description, name, tags, to}) => (
            <li key={to}>
              <Layout align="flex-start" direction="column" spacing="xs">
                <Link to={to}>
                  <BrandText text={name} />
                </Link>
                {description && (
                  <Text variant="description">
                    <Markdown content={description} />
                  </Text>
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
