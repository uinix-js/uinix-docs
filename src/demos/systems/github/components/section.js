import React from 'react';
import {Layout, Text} from 'uinix-ui';

const Section = ({children, description, title}) => {
  return (
    <Layout as="section" direction="column">
      <Text as="h2" mb="m" variant="subtitle">
        {title}
      </Text>
      {description && (
        <Layout direction="column">
          <Text variant="small">{description}</Text>
        </Layout>
      )}
      {children}
    </Layout>
  );
};

export default Section;
