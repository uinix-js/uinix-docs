import React from 'react';
import {Layout} from 'uinix-ui';

import {BrandLink} from '../system/ui/index.js';

const Footer = () => {
  return (
    <Layout align="center" as="footer" spacing="s">
      <small>© {new Date().getFullYear()}</small>
      <BrandLink />
    </Layout>
  );
};

export default Footer;
