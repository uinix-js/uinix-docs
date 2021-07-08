import React from 'react';
import {Layout, Text, createTheme} from 'uinix-ui';

import SpecDefinitions from '../spec-definitions.js';
import SpecSection from '../spec-section.js';
import renderers from './renderers.js';

const themeProperties = Object.keys(createTheme());

const Theme = ({theme}) => (
  <Layout direction="column" spacing="l">
    {themeProperties.map((themeProperty) => {
      const render = renderers[themeProperty];
      const definitions = theme[themeProperty];

      const content = render ? (
        <SpecDefinitions
          name={themeProperty}
          definitions={definitions}
          render={render}
        />
      ) : (
        <Text variant="description">Unable to display {themeProperty}.</Text>
      );

      return (
        <SpecSection key={themeProperty} name={themeProperty}>
          {content}
        </SpecSection>
      );
    })}
  </Layout>
);

export default Theme;
