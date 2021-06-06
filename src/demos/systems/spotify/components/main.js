import React from 'react';
import {Layout} from 'uinix-ui';

import {exampleCards as cards} from '../data.js';
import Section from './section.js';

const Main = () => {
  return (
    <Layout direction="column" p="l" spacing="xl">
      <Section
        cards={cards}
        cardVariant="summary"
        showMore={null}
        title="Good evening"
        titleVariant="xxl"
      />
      <Section
        cards={cards}
        description="Podcasts we think you'll get hooked on."
        title="Recently played"
      />
      <Section
        cards={cards}
        description="Brand new music from artists you love."
        title="New release for you"
      />
      <Section cards={cards} title="Jump back in" />
      <Section
        cards={cards}
        description="Get better recommendations the more you listen."
        title="Made for you"
      />
      <Section
        cards={cards}
        description="Inspired by your recent activity."
        title="Recommended for today"
      />
      <Section cards={cards} title="Your favorite artists" />
    </Layout>
  );
};

export default Main;
