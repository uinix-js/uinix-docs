import React from 'react';

import BrandLink from './brand-link.js';

const PackageLink = ({name}) => {
  return <BrandLink text={name} to={`/packages/${name}`} />;
};

export default PackageLink;
