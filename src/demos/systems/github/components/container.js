import React from 'react';
import {Element, Layout} from 'uinix-ui';

const Container = ({children, header, headerBg}) => (
  <Layout b="bordered" borderRadius="m" direction="column">
    <Element bb="bordered" bg={headerBg} p="m">
      {header}
    </Element>
    {children}
  </Layout>
);

export default Container;
