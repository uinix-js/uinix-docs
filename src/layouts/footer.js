import React from 'react';
import {Text} from 'uinix-ui';

import {BrandLink} from '../system/components/index.js';

const Footer = () => {
  return (
    <Text as="footer" py="m">
      <small>© {new Date().getFullYear()}</small> <BrandLink />
    </Text>
  );
};

export default Footer;
