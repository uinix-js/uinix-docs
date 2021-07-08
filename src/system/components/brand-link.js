import {Link} from 'gatsby';
import React from 'react';

import BrandText from './brand-text.js';

const BrandLink = ({to = '/', text = 'uinix-js'}) => (
  <Link to={to}>
    <BrandText text={text} />
  </Link>
);

export default BrandLink;
