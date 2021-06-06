import React from 'react';
import {Layout} from 'uinix-ui';

const Container = ({children, ...rest}) => {
  return (
    <Layout {...rest} mx="auto" w="width.container">
      {children}
    </Layout>
  );
};

export default Container;
