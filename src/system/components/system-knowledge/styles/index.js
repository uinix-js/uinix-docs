import React from 'react';
import {Layout} from 'uinix-ui';

import SpecDefinitions from '../spec-definitions.js';
import SpecSection from '../spec-section.js';
import renderers from './renderers.js';

const Styles = ({styles}) => {
  const {breakpoints, global, typography, variants, ...rules} = styles;

  const breakpointDefinitions = breakpoints.reduce((acc, breakpoint) => {
    acc[breakpoint] = breakpoint;
    return acc;
  }, {});

  return (
    <Layout direction="column" spacing="l">
      <SpecSection name="breakpoints">
        <SpecDefinitions
          definitions={breakpointDefinitions}
          name="styles.breakpoints"
          render={renderers.breakpoints}
        />
      </SpecSection>
      <SpecSection name="global">
        <SpecDefinitions
          disableNest
          definitions={global}
          name="styles.global"
          render={renderers.global}
        />
      </SpecSection>
      <SpecSection name="variants">
        <SpecDefinitions
          enableEarlyTerminate
          definitions={variants}
          name="styles.variants"
          render={renderers.variants}
        />
      </SpecSection>
      <SpecSection name="typography.fontFaces">
        <SpecDefinitions
          disableNest
          definitions={typography.fontFaces}
          name="styles.typography.fontFaces"
          render={renderers.fontFaces}
        />
      </SpecSection>
      <SpecSection name="typography.global">
        <SpecDefinitions
          disableNest
          definitions={typography.global}
          name="styles.typography.global"
          render={renderers.global}
        />
      </SpecSection>
      <SpecSection name="typography.variants">
        <SpecDefinitions
          enableEarlyTerminate
          definitions={typography.variants}
          name="styles.typography.variants"
          render={renderers.variants}
        />
      </SpecSection>
      <SpecSection name="Rules">
        <SpecDefinitions
          disableNest
          definitions={rules}
          name="style rules"
          render={renderers.rules}
        />
      </SpecSection>
    </Layout>
  );
};

export default Styles;
