import React from 'react';
import {Icon, Layout} from 'uinix-ui';

const LoadingPage = () => {
  return (
    <Layout align="center" justify="center" variant="layout.container">
      <Icon color="icon.light" icon="spinner" size="icon.m" />
    </Layout>
  );
};

export default LoadingPage;
