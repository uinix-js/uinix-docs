import React from 'react';
import {Layout} from 'uinix-ui';

import Markdown from '../markdown.js';
import Section from '../section.js';
import Icons from './icons/index.js';

const SystemKnowledge = ({system}) => {
  const specs = '```json\n' + JSON.stringify(system, null, 2) + '\n```';

  return (
    <Layout direction="column" p="m" spacing="xl">
      <Section title="Icons">
        <Icons icons={system.icons} />
      </Section>
      <Section title="Theme" />
      <Section title="Styles" />
      <Section title="Specs">
        <Markdown content={specs} />
      </Section>
    </Layout>
  );
};

export default SystemKnowledge;
