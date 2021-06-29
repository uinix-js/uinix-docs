import React from 'react';
import {Layout} from 'uinix-ui';

import Section from '../../section.js';
import Breakpoints from './breakpoints.js';

const Styles = ({styles}) => {
  const {breakpoints} = styles;

  return (
    <Layout direction="column" spacing="l">
      <Breakpoints breakpoints={breakpoints} />
      <Section as="h4" title="global">
        Global
      </Section>
      <Section as="h4" title="variants">
        Variants
      </Section>
      <Section as="h4" title="typography.fontFaces">
        Typography.fontFaces
      </Section>
      <Section as="h4" title="typography.global">
        Typography.global
      </Section>
      <Section as="h4" title="typography.variants">
        Typography.variants
      </Section>
      <Section as="h4" title="Others">
        Others
      </Section>
    </Layout>
  );
};

export default Styles;
