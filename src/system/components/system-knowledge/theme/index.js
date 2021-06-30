import React from 'react';
import {Layout, Text, createTheme} from 'uinix-ui';

import SpecDefinitions from '../spec-definitions.js';
import SpecSection from '../spec-section.js';
import renderers from './renderers.js';

const themeProperties = Object.keys(createTheme());

const Theme = ({theme}) => {
  return (
    <Layout direction="column" spacing="l">
      {themeProperties.map((themeProperty) => {
        const render = renderers[themeProperty];
        const definitions = theme[themeProperty];

        let content;
        if (Object.keys(definitions).length === 0) {
          content = (
            <Text variant="description">
              No {themeProperty} are defined in the system.
            </Text>
          );
        } else if (render) {
          content = (
            <SpecDefinitions definitions={definitions} render={render} />
          );
        } else {
          content = (
            <Text variant="description">
              Unable to display {themeProperty}.
            </Text>
          );
        }

        return (
          <SpecSection key={themeProperty} name={themeProperty}>
            {content}
          </SpecSection>
        );
      })}
    </Layout>
  );
};

export default Theme;
