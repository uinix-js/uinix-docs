import React from 'react';
import {Element, Icon, Layout, Text} from 'uinix-ui';
import readme from 'uinix-ui/readme.md';

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

  const readmeContents = (
    <div dangerouslySetInnerHTML={{__html: readme.html}} /> // eslint-disable-line react/no-danger
  );

  return (
    <Container header={header}>
      <Element className="markdown-body" px="l">
        {readmeContents}
      </Element>
    </Container>
  );
};

export default Readme;
