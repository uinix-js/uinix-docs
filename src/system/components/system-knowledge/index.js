import React from 'react';
import {Layout} from 'uinix-ui';

import Json from '../json.js';
import Section from '../section.js';
import Icons from './icons/index.js';
import Styles from './styles/index.js';
import Theme from './theme/index.js';

const SystemKnowledge = ({system}) => {
  const {icons, styles, theme} = system;
  return (
    <Layout direction="column" spacing="xl">
      <Section as="h3" title="Icons">
        <Icons icons={icons} />
      </Section>
      <Section as="h3" title="Theme">
        <Theme theme={theme} />
      </Section>
      <Section as="h3" title="Styles">
        <Styles styles={styles} />
      </Section>
      <Section as="h3" title="System">
        <Json value={{icons, styles, theme}} />
      </Section>
    </Layout>
  );
};

export default SystemKnowledge;
