import React from 'react';

import NavPageLayout from '../../layouts/nav-page-layout.js';
import {BrandLink} from '../../system/components/index.js';

const description = (
  <>
    UI Demos built with <BrandLink />.
  </>
);

const links = [
  {
    label: 'Systems',
    to: 'systems',
  },
];

const Page = () => {
  return <NavPageLayout description={description} links={links} />;
};

export default Page;
