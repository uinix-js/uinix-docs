import React from 'react';
import pkg from 'uinix-fp/package.json';

import PackagePageLayout from '../../../layouts/package-page-layout.js';

const links = [
  'Readme', //
  'Recipes',
];

const Page = () => {
  return <PackagePageLayout links={links} pkg={pkg} />;
};

export default Page;
