import React from 'react';
import {Layout} from 'uinix-ui';

import Markdown from '../markdown.js';
import Section from '../section.js';
import Icons from './icons/index.js';
import Styles from './styles/index.js';
import Theme from './theme/index.js';

const SystemKnowledge = ({system}) => {
  const {icons, styles, theme} = system;
  return (
    <Layout direction="column" p="m" spacing="xl">
      <Section as="h3" title="Icons">
        <Icons icons={icons} />
      </Section>
      <Section as="h3" title="Theme">
        <Theme theme={theme} />
      </Section>
      <Section as="h3" title="Styles">
        <Styles theme={styles} />
      </Section>
      <Section as="h3" title="Specs">
        <Markdown
          content={
            '```json\n' +
            JSON.stringify({icons, theme, styles}, null, 2) +
            '\n```'
          }
        />
      </Section>
    </Layout>
  );
};

export default SystemKnowledge;
