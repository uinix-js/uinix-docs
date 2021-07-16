import React from 'react';
import pkg from 'uinix-ui/package.json';

import PackagePageLayout from '../../../layouts/package-page-layout.js';

const resources = [
  {
    name: 'Guides',
    links: [
      'Build a Box',
      'Icons',
      'Typography',
      'Variant Styles',
      'Responsive Styles',
      'Animations',
      'System Knowledge',
    ],
  },
  {
    name: 'Recipes',
    links: ['Components', 'Layouts', 'Styles', 'Theme'],
  },
  {
    name: 'Resources',
    links: ['Comparison with theme-ui', 'hyperscript'],
  },
];

const Page = () => <PackagePageLayout resources={resources} pkg={pkg} />;

export default Page;
