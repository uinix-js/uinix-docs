import React from 'react';
import {Layout, Text} from 'uinix-ui';

import {repo} from '../data.js';
import IconText from './icon-text.js';
import Section from './section.js';

const About = () => (
  <Section title="About">
    <Layout direction="column" spacing="m">
      <Text as="p" mt="xs" variant="subtitle">
        {description}
      </Text>
      <IconText as="a" fontWeight="bold" icon="link" href={url} text={url} />
      <Layout wrap spacing="s" wrapSpacing="xs">
        {tags.map((tag) => (
          <Text key={tag} variant="pill">
            {tag}
          </Text>
        ))}
      </Layout>
      <IconText icon="book" href="#top" text="Readme" variant="link" />
      <IconText
        icon="license"
        href="#top"
        text={`${license} License`}
        variant="link"
      />
    </Layout>
  </Section>
);

const {description, license, url, tags} = repo;

export default About;
