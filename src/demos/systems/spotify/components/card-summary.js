import React from 'react';
import {Element, Layout, Text} from 'uinix-ui';

import Cover from './cover.js';
import Play from './play.js';

const CardSummary = ({imgSrc, title}) => {
  return (
    <Layout
      align="center"
      spacing="m"
      styles={[styles.card, styles.cardHoverPlayIcon]}
    >
      <Element styles={styles.coverImageBorder}>
        <Cover alt={title} src={imgSrc} size="m" />
      </Element>
      <Layout align="center" flex="auto" justify="space-between" spacing="m">
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
        <Element className="playIcon" pr="m" styles={styles.playIcon}>
          <Play hasAccent />
        </Element>
      </Layout>
    </Layout>
  );
};

const styles = {
  card: {
    backgroundColor: 'background.gray3',
    borderRadius: 'm',
    lineHeight: 0,
    minWidth: 'width.summaryCard',
    transition: 'default',
    width: '30%',
    ':hover': {
      backgroundColor: 'background.gray2',
    },
  },
  cardHoverPlayIcon: {
    ':hover .playIcon': {
      opacity: 'visible',
    },
  },
  coverImageBorder: {
    '& img': {
      borderTopLeftRadius: 'm',
      borderBottomLeftRadius: 'm',
    },
  },
  playIcon: {
    opacity: 'invisible',
    transition: 'default',
  },
};

export default CardSummary;
