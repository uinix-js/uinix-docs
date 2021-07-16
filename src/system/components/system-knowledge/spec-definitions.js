import React from 'react';
import {Layout, Text} from 'uinix-ui';

import Spec from './spec.js';
import {testIsEveryValueNonPlainObject, testIsNestedValue} from './utils.js';

const SpecDefinitions = ({
  definitions = {},
  disableNest = false,
  enableEarlyTerminate = false,
  level = 0,
  name,
  propertyPath = '',
  render,
}) => {
  if (Object.keys(definitions).length === 0) {
    return (
      <Text variant="description">No {name} are defined in the system.</Text>
    );
  }

  if (enableEarlyTerminate && testIsEveryValueNonPlainObject(definitions)) {
    return <Spec name={propertyPath} value={definitions} render={render} />;
  }

  return (
    <Layout direction="column" spacing="xs">
      {Object.entries(definitions).map(([key, value]) => {
        const childPropertyPath = level === 0 ? key : `${propertyPath}.${key}`;
        if (!disableNest && testIsNestedValue(value)) {
          if (enableEarlyTerminate && testIsEveryValueNonPlainObject(value)) {
            return (
              <Spec
                key={key}
                name={childPropertyPath}
                value={value}
                render={render}
              />
            );
          }

          return (
            <details key={key} open>
              <summary>{childPropertyPath}</summary>
              <SpecDefinitions
                definitions={value}
                disableNest={disableNest}
                enableEarlyTerminate={enableEarlyTerminate}
                level={level + 1}
                name={name}
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
