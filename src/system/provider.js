import React from 'react';
import {SystemProvider} from 'uinix-ui';

import system from './index.js';

const Provider = ({children}) => {
  return <SystemProvider system={system}>{children}</SystemProvider>;
};

export default Provider;
