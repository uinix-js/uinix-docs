import React from 'react';

import fp from 'uinix-fp/package.json';
import theme from 'uinix-theme/package.json';
import ui from 'uinix-ui/package.json';

import NavPageLayout from '../../layouts/nav-page-layout.js';
import {BrandLink} from '../../system/components/index.js';

const description = (
  <>
    Packages in the <BrandLink /> ecosystem.
  </>
);

const links = [
  {
    description: fp.description,
    label: fp.name,
    to: fp.name,
  },
  {
    description: theme.description,
    label: theme.name,
    to: theme.name,
  },
  {
    description: ui.description,
    label: ui.name,
    to: ui.name,
  },
];

const Page = () => {
  return <NavPageLayout description={description} links={links} />;
};

export default Page;
