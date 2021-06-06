import React from 'react';

import NavPageLayout from '../../layouts/nav-page-layout.js';
import {BrandLink} from '../../system/components/index.js';

const tags = {
  WHITEPAPER: 'whitepaper',
};

const description = (
  <>
    Guides, tutorials, whitepapers on building UIs easily with <BrandLink />.
  </>
);

const links = [
  {
    description: 'Exploring complexity in building and maintaining UI systems.',
    label: 'UI Systems and Complexity',
    tags: [tags.WHITEPAPER],
    to: 'ui-systems-and-complexity-whitepaper',
  },
];

const Page = () => {
  return <NavPageLayout description={description} links={links} />;
};

export default Page;
