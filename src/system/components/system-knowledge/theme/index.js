import React from 'react';
import {Layout, Text, createTheme} from 'uinix-ui';

import SpecDefinitions from '../spec-definitions.js';
import SpecList from '../spec-list.js';
import * as renderers from './renderers/index.js';

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
        } else if (!render) {
          content = (
            <Text variant="description">
              Unable to display {themeProperty}.
            </Text>
          );
        } else {
          content = (
            <SpecDefinitions definitions={definitions} render={render} />
          );
        }

        return (
          <SpecList key={themeProperty} name={themeProperty}>
            {content}
          </SpecList>
        );
      })}
    </Layout>
  );
};

export default Theme;
