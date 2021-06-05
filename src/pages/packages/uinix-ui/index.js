import React from 'react';
import pkg from 'uinix-ui/package.json';

import NavPageLayout from '../../../layouts/nav-page-layout.js';

const description = pkg.description;

const links = [];

const Page = () => {
  return <NavPageLayout description={description} links={links} />;
};

export default Page;
