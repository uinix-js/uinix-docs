import React from 'react';

import {Links, Markdown} from '../system/components/index.js';
import PageLayout from './page-layout.js';

const NavPageLayout = ({description, links}) => {
  return (
    <PageLayout>
      <Markdown content={description} />
      <Links links={links} />
    </PageLayout>
  );
};

export default NavPageLayout;
