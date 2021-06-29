import React from 'react';
import {Layout, Text, createTheme} from 'uinix-ui';

import Section from '../../section.js';
import renderers from './renderers/index.js';

const themeProperties = Object.keys(createTheme());

const Theme = ({theme}) => {
  return (
    <Layout direction="column" spacing="l">
      {themeProperties.map((themeProperty) => {
        const renderer = renderers[themeProperty];
        return (
          <Section key={themeProperty} as="h4" title={themeProperty}>
            {renderer ? (
              renderer(theme[themeProperty])
            ) : (
              <Text variant="description">
                No {themeProperty} are defined in the system.
              </Text>
            )}
          </Section>
        );
      })}
    </Layout>
  );
};

export default Theme;
