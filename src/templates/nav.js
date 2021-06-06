import React from 'react';

import NavPageLayout from '../layouts/nav-page-layout.js';

const Nav = ({pageContext}) => {
  const {description, links} = pageContext;
  return <NavPageLayout description={description} links={links} />;
};

export default Nav;
