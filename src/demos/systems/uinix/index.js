import {createSystem} from 'uinix-ui';

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
  name: 'uinix',
  Demo,
  url: 'https://github.com/uinix-js/uinix-ui',
};

export default system;
