import React from 'react';
import {Element, Layout, Text} from 'uinix-ui';

import {models} from '../data.js';
import Container from './container.js';
import MacbookImage from './macbook-image.js';

const LearnMore = () => {
  return (
    <Element as="section" bg="background.wash" pb="x18" pt="x33">
      <Container justify="space-between" spacing="x6">
        {models.map((model) => {
          const {imageSrc, learnMoreUrl, name, techSpecsUrl} = model;
          return (
            <Layout
              key={name}
              align="center"
              direction="column"
              spacing="x4"
              w="33%"
            >
              <MacbookImage src={imageSrc} />
              <Text as="h2" textAlign="center" whiteSpace="pre-wrap">
                {name}
              </Text>
              <Layout align="center" spacing="x6">
                <Text as="a" href={techSpecsUrl}>
                  Tech Specs
                </Text>
                <Text as="a" href={learnMoreUrl}>
                  Learn more
                </Text>
              </Layout>
            </Layout>
          );
        })}
      </Container>
    </Element>
  );
};

export default LearnMore;
