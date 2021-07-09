import React from 'react';
import pkg from 'uinix-ui/package.json';

import PackagePageLayout from '../../../layouts/package-page-layout.js';

const resources = [
  {
    name: 'Guides',
    links: [
      'Build a Box',
      'Build a Button',
      'Variants',
      'Typography',
      'Responsive',
      'Animations',
      'System Knowledge',
      'hyperscript',
    ],
  },
  {
    name: 'Recipes',
    links: ['Components', 'Styles', 'Theme'],
  },
  {
    name: 'Resources',
    links: ['Comparison with theme-ui'],
  },
];

const Page = () => <PackagePageLayout resources={resources} pkg={pkg} />;

export default Page;
