import React from 'react';
import pkg from 'uinix-fp/package.json';

import PackagePageLayout from '../../../layouts/package-page-layout.js';

const resources = [
  {
    name: 'Resources',
    links: ['Recipes'],
  },
];

const Page = () => <PackagePageLayout resources={resources} pkg={pkg} />;

export default Page;
