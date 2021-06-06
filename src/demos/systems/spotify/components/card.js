import React from 'react';
import {Element, Layout, Text} from 'uinix-ui';

import Cover from './cover.js';
import Play from './play.js';

const Card = ({description, imgSrc, title}) => {
  return (
    <Layout
      direction="column"
      spacing="m"
      styles={[styles.card, styles.cardHoverPlayIcon]}
    >
      <Element position="relative">
        <Cover alt={title} src={imgSrc} size="l" />
        <Element className="playIcon" styles={styles.playIcon}>
          <Play hasAccent />
        </Element>
      </Element>
      <Layout direction="column" pb="s" spacing="xxs" w="cover.l">
        <Text
          truncate
          as="a"
          color="text.primary"
          fontWeight="bold"
          href="#top"
          variant="m"
        >
          {title}
        </Text>
        <Text truncate as="a" color="text.secondary" href="#top" variant="s">
          {description}
        </Text>
      </Layout>
    </Layout>
  );
};

const styles = {
  card: {
    backgroundColor: 'background.gray3',
    borderRadius: 'm',
    padding: 'm',
    transition: 'default',
    ':hover': {
      backgroundColor: 'background.gray2',
    },
  },
  cardHoverPlayIcon: {
    ':hover .playIcon': {
      opacity: 'visible',
      transform: 'nudgeUp',
    },
  },
  playIcon: {
    bottom: 's',
    opacity: 'invisible',
    position: 'absolute',
    right: 's',
    transition: 'default',
  },
};

export default Card;
