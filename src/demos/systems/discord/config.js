import styles from './styles.js';

const config = {
  elementStyles: [
    styles.interactive,
    [({truncate}) => (truncate ? styles.truncate : null)],
  ],
};

export default config;
