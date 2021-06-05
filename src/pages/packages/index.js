import React from 'react';

import NavPageLayout from '../../layouts/nav-page-layout.js';
import {BrandLink} from '../../system/components/index.js';

const description = (
  <>
    Packages in the <BrandLink /> ecosystem:
  </>
);

const links = [
  {
    label: 'uinix-fp',
    to: 'uinix-fp',
  },
  {
    label: 'uinix-theme',
    to: 'uinix-theme',
  },
  {
    label: 'uinix-ui',
    to: 'uinix-ui',
  },
];

const Page = () => {
  return <NavPageLayout description={description} links={links} />;
};

export default Page;
