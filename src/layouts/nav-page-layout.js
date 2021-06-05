import {Link} from 'gatsby';
import React from 'react';
import {Layout} from 'uinix-ui';

import PageLayout from './page-layout.js';

const NavPageLayout = ({description, links}) => {
  return (
    <PageLayout>
      <p>{description}</p>
      <nav>
        <Layout as="ul" direction="column">
          {links.map(({label, to}) => (
            <li key={to}>
              <Link to={to}>{label}</Link>
            </li>
          ))}
        </Layout>
      </nav>
    </PageLayout>
  );
};

export default NavPageLayout;
