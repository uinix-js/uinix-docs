import React from 'react';
import {Text} from 'uinix-ui';

import {BrandLink} from '../system/components/index.js';

const Footer = () => {
  return (
    <Text as="footer" py="m">
      © {new Date().getFullYear()} <BrandLink />
    </Text>
  );
};

export default Footer;
