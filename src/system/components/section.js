import React from 'react';
import {Layout} from 'uinix-ui';

import Heading from './heading.js';

const Section = ({children, title}) => {
  return (
    <Layout as="section" direction="column" spacing="m">
      <Heading as="h3" text={title} />
      {children}
    </Layout>
  );
};

export default Section;
