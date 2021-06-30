import React from 'react';
import {Layout} from 'uinix-ui';

import Spec from './spec.js';
import {testIsNestedValue} from './test-is-nested-value.js';

const SpecDefinitions = ({
  definitions,
  level = 0,
  propertyPath = '',
  render,
}) => {
  return (
    <Layout direction="column" spacing="xs">
      {Object.entries(definitions).map(([key, value]) => {
        const childPropertyPath = level === 0 ? key : `${propertyPath}.${key}`;
        if (testIsNestedValue(value)) {
          return (
            <details key={key} open>
              <summary>{childPropertyPath}</summary>
              <SpecDefinitions
                definitions={value}
                level={level + 1}
                propertyPath={childPropertyPath}
                render={render}
              />
            </details>
          );
        }

        return (
          <Spec
            key={key}
            name={childPropertyPath}
            value={value}
            render={render}
          />
        );
      })}
    </Layout>
  );
};

export default SpecDefinitions;
