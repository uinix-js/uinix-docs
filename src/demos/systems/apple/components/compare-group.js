import React from 'react';
import {Layout} from 'uinix-ui';

import CompareSpec from './compare-spec.js';
import Section from './section.js';

const CompareGroup = ({footnote, models, spec, title}) => (
  <Section footnote={footnote} title={title}>
    <Layout justify="space-between" spacing="x6">
      {models.map((model) => (
        <CompareSpec key={model.name} model={model} spec={spec} />
      ))}
    </Layout>
  </Section>
);

export default CompareGroup;
