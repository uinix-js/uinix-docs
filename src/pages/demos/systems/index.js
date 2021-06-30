import React from 'react';

import NavPageLayout from '../../../layouts/nav-page-layout.js';

const Page = () => {
  const description =
    'The following UI systems are reverse-engineered and built rapidly with uinix-ui using only four component primitives (`Element`, `Layout`, `Icon`, `Text`) and a minimal set of UI specs (`theme`, `icons`, `styles`).  The system knowledge of each system is easily made accessible and visualizable.';
  const links = ['uinix', 'Apple', 'Discord', 'Github', 'Google', 'Spotify'];

  return <NavPageLayout description={description} links={links} />;
};

export default Page;
