import React from 'react';
import {Element, useStyles} from 'uinix-ui';

const Dot = ({color, isBordered, size}) => {
  const styles = useStyles();

  const dot = <Element styleProps={{color, size}} styles={styles.dot} />;

  if (isBordered) {
    return (
      <Element b="bordered" borderRadius="round" p="xxs">
        {dot}
      </Element>
    );
  }

  return dot;
};

export default Dot;
