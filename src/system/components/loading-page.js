import React from 'react';
import {Icon, Layout} from 'uinix-ui';

const LoadingPage = () => {
  return (
    <Layout align="center" h="100vh" justify="center">
      <Icon color="icon.light" icon="spinner" size="icon.l" />
    </Layout>
  );
};

export default LoadingPage;
