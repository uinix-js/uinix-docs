import React from 'react';
import {Element, Layout} from 'uinix-ui';

import CopyClipboard from './copy-clipboard.js';

const Copyable = ({children, other, text}) => (
  <Element position="relative">
    {children}
    <Layout
      align="center"
      bottom="xs"
      position="absolute"
      right="xs"
      spacing="m"
    >
      {other}
      <CopyClipboard text={text} />
    </Layout>
  </Element>
);

export default Copyable;
