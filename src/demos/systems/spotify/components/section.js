import React from 'react';
import {Layout, Text} from 'uinix-ui';

import Card from './card.js';
import CardSummary from './card-summary.js';

const Section = ({
  cards,
  cardVariant,
  description,
  showMore = 'See all',
  title,
  titleVariant = 'xl',
}) => {
  const CardComponent = cardVariant === 'summary' ? CardSummary : Card;

  return (
    <Layout as="section" direction="column" spacing="m">
      <Layout align="flex-end" justify="space-between">
        <Layout direction="column">
          <Text as="h2" variant={titleVariant}>
            {title}
          </Text>
          {description && <Text variant="m">{description}</Text>}
        </Layout>
        {showMore && (
          <Text as="a" color="text.secondary" href="#top" variant="caps">
            {showMore}
          </Text>
        )}
      </Layout>
      <Layout wrap spacing="l" wrapSpacing="m">
        {cards.map((card) => (
          <CardComponent key={card.title} {...card} />
        ))}
      </Layout>
    </Layout>
  );
};

export default Section;
