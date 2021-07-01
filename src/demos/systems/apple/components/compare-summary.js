import React from 'react';
import {noop} from 'uinix-fp';
import {Layout, Text} from 'uinix-ui';

import {models} from '../data.js';
import Colors from './colors.js';
import Container from './container.js';
import MacbookImage from './macbook-image.js';

const CompareSummary = () => {
  return (
    <Layout as="section">
      <Container justify="space-between" spacing="x6">
        {models.map((model) => {
          const {colors, imageSrc2, name, startingPrice} = model;
          return (
            <Layout key={name} align="center" direction="column" spacing="x12">
              <select value={name} onChange={noop}>
                <option value={name}>{name}</option>
              </select>
              <Layout align="center" direction="column" pt="x20" spacing="x10">
                <MacbookImage src={imageSrc2} />
                <Colors colors={colors} />
              </Layout>
              <Text>From ${startingPrice}</Text>
              <button type="button" onClick={noop}>
                Buy
              </button>
            </Layout>
          );
        })}
      </Container>
    </Layout>
  );
};

export default CompareSummary;
