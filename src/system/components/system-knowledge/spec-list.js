import React from 'react';
import {Layout} from 'uinix-ui';

import Section from '../section.js';

const SpecList = ({children, name}) => {
  return (
    <Section as="h4" title={name}>
      <Layout direction="column" spacing="m">
        {children}
      </Layout>
    </Section>
  );
};

export default SpecList;
