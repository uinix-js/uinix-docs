import React from 'react';
import pkg from 'uinix-ui/package.json';

import PackagePageLayout from '../../../layouts/package-page-layout.js';

const resources = [
  {
    name: 'Guides',
    links: [
      'System Knowledge',
      'Icons',
      'Typography',
      'Variant Styles',
      'Responsive Styles',
      'Animations',
      'Build a Box',
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
