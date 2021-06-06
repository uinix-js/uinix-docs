import React from 'react';

import NavPageLayout from '../../layouts/nav-page-layout.js';
import {BrandLink} from '../../system/components/index.js';

const description = (
  <>
    Guides, tutorials, whitepapers on building UIs easily with <BrandLink />.
  </>
);

const links = [
  {
    label: 'UI Systems and Complexity',
    to: 'ui-systems-and-complexity-whitepaper',
  },
];

const Page = () => {
  return <NavPageLayout description={description} links={links} />;
};

export default Page;
