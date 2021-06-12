import React from 'react';

import styles from './styles.js';

const config = {
  elementStyles: [
    styles.interactive,
    [({truncate}) => (truncate ? styles.truncate : null)],
  ],
  h: React.createElement,
};

export default config;
