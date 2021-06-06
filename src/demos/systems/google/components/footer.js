import React from 'react';
import {Element, Layout, Text} from 'uinix-ui';

import Container from './container.js';
import GrayLink from './gray-link.js';

const Footer = () => {
  return (
    <Element as="footer" bg="background.wash" color="text.gray2" mt="x6">
      <Container>
        <Layout direction="column" py="x6" spacing="x3">
          <div>
            <Text variant="grayEmphasized">Location unavailable</Text> - From
            your Internet address -{' '}
            <GrayLink href="https://support.google.com/websearch/answer/179386">
              Learn more
            </GrayLink>
          </div>
          <Layout spacing="x8">
            <GrayLink href="https://support.google.com/websearch">
              Help
            </GrayLink>
            <GrayLink href="https://policies.google.com/privacy">
              Privacy
            </GrayLink>
            <GrayLink href="https://policies.google.com/terms">Terms</GrayLink>
          </Layout>
        </Layout>
      </Container>
    </Element>
  );
};

export default Footer;
