import React from 'react';
import pkg from 'uinix-theme/package.json';

import PackagePageLayout from '../../../layouts/package-page-layout.js';

const links = [
  'Readme', //
  'Theme Mapping',
];

const Page = () => {
  return <PackagePageLayout links={links} pkg={pkg} />;
};

export default Page;
