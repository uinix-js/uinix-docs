import {createSystem} from 'uinix-ui';

import snapshot from './assets/images/snapshot.png';
import Demo from './demo.js';
import icons from './icons.js';
import styles from './styles.js';
import theme from './theme.js';

const system = createSystem({
  icons,
  styles,
  theme,
});

system.meta = {
  name: 'Github',
  Demo,
  referenceDate: '2021-04-25',
  snapshot,
  url: 'https://github.com/uinix-js/uinix-ui',
};

export default system;
