import React from 'react';
import pkg from 'uinix-theme/package.json';

import PackagePageLayout from '../../../layouts/package-page-layout.js';

const resources = [
  {
    name: 'Resources',
    links: ['Theme Mapping'],
  },
];

const Page = () => <PackagePageLayout resources={resources} pkg={pkg} />;

export default Page;
