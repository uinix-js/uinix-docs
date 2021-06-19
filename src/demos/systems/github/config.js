import styles from './styles.js';

const config = {
  elementStyles: [[({truncate}) => (truncate ? styles.truncate : null)]],
};

export default config;
