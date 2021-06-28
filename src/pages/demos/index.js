import React from 'react';

import NavPageLayout from '../../layouts/nav-page-layout.js';

const Page = () => {
  const description = 'UI Demos built with uinix-js.';
  const links = [
    {
      description: 'UI systems minimally built with uinix-js.',
      text: 'Systems',
      to: 'systems',
    },
  ];

  return <NavPageLayout description={description} links={links} />;
};

export default Page;
