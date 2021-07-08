import React from 'react';
import {Layout} from 'uinix-ui';

import {models} from '../data.js';
import Container from './container.js';
import Section from './section.js';
import Stat from './stat.js';

const QuickLook = () => (
  <Container>
    <Section title="Quick Look">
      <Layout justify="space-between" spacing="x6">
        {models.map((model) => (
          <Layout key={model.name} direction="column" spacing="x20">
            {Object.values(model.stats).map((stat) => (
              <Stat key={stat.value} stat={stat} />
            ))}
          </Layout>
        ))}
      </Layout>
    </Section>
  </Container>
);

export default QuickLook;
