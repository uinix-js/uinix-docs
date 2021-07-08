import React from 'react';

import Section from '../section.js';

const SpecSection = ({children, name}) => (
  <Section as="h4" title={name}>
    {children}
  </Section>
);

export default SpecSection;
