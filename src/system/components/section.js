import React from 'react';
import {Layout} from 'uinix-ui';

import Heading from './heading.js';

const Section = ({as, children, title}) => {
  return (
    <Layout as="section" direction="column" spacing="m">
      <Heading as={as} text={title} />
      {children}
    </Layout>
  );
};

export default Section;
