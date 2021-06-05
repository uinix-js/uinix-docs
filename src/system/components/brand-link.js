import {Link} from 'gatsby';
import React from 'react';

import BrandText from './brand-text.js';

const BrandLink = () => {
  return (
    <Link to="/">
      <BrandText text="uinix-js" />
    </Link>
  );
};

export default BrandLink;
