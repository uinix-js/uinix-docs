import {MDXProvider} from '@mdx-js/react';
import React from 'react';
import {Element, Icon, Layout, Text} from 'uinix-ui';
import ReadmeContents from 'uinix-ui/readme.md';

import Container from './container.js';

const Readme = () => {
  const header = (
    <Layout align="center" spacing="m">
      <Icon color="icon.default" icon="listUnordered" size="icon.m" />
      <Text as="a" href="#top" variant="linkBold">
        readme.md
      </Text>
    </Layout>
  );

  return (
    <Container header={header}>
      <Element className="markdown-body" p="l">
        <MDXProvider>
          <ReadmeContents />
        </MDXProvider>
      </Element>
    </Container>
  );
};

export default Readme;
