import React from 'react';

import NavPageLayout from '../../layouts/nav-page-layout.js';

const Page = () => {
  const description = 'Packages in the uinix-js ecosystem.';
  const links = ['uinix-ui', 'uinix-theme', 'uinix-fp'];

  return <NavPageLayout description={description} links={links} />;
};

export default Page;
