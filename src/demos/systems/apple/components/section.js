import React from 'react';
import {Layout, Text} from 'uinix-ui';

import Footnote from './footnote.js';

const Section = ({children, footnote, title}) => {
  return (
    <Layout as="section" direction="column" flex="auto" spacing="x12">
      <Text bb="bordered" py="x6" variant="title">
        {title}
        {footnote && <Footnote footnote={footnote} />}
      </Text>
      {children}
    </Layout>
  );
};

export default Section;
