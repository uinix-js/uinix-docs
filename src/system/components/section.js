import React from 'react';
import {Layout} from 'uinix-ui';

import Heading from './heading.js';

const Section = ({as, children, title}) => (
  <Layout as="section" direction="column" spacing="s">
    <Heading as={as} text={title} />
    <div>{children}</div>
  </Layout>
);

export default Section;
