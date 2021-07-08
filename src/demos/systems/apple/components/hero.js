import React from 'react';
import {Layout, Text} from 'uinix-ui';

const Hero = () => (
  <Layout
    as="section"
    align="center"
    direction="column"
    pb="x8"
    pt="x30"
    spacing="x4"
  >
    <Text as="h1">Compare Mac models</Text>
    <Text variant="subtitle">
      <Text as="a" href="#top" variant="subtitle">
        See all models
      </Text>
    </Text>
    <Text as="p" variant="subtitle">
      Get help choosing. <a href="#top">Contact us</a>.
    </Text>
  </Layout>
);

export default Hero;
