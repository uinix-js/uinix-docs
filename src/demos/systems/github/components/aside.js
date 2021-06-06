import React from 'react';
import {Layout, Text} from 'uinix-ui';

import {repo} from '../data.js';
import About from './about.js';
import Languages from './languages.js';
import Section from './section.js';

const Aside = () => {
  return (
    <Layout
      as="aside"
      direction="column"
      flex="none"
      spacing="l"
      w="width.aside"
    >
      <About />
      <hr />
      <Section title="Releases" description="No releases published">
        <Text
          as="a"
          fontSize="small"
          href={`https://github.com/${user}/${name}/releases/new`}
        >
          Create a new release
        </Text>
      </Section>
      <hr />
      <Section title="Packages" description="No packages published">
        <Text
          as="a"
          fontSize="small"
          href={`https://github.com/${user}/${name}/packages`}
        >
          Publish your first package
        </Text>
      </Section>
      <hr />
      <Section title="Languages">
        <Languages languages={languages} />
      </Section>
    </Layout>
  );
};

const {languages, name, user} = repo;

export default Aside;
