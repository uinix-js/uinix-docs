import React from 'react';
import {Element, Layout} from 'uinix-ui';

import Dot from './dot.js';

// Non-system styles (Mac window styles)
const ACTION_SIZE = '12px';
const CLOSE_ACTION_COLOR = '#fa625c';
const MINIMIZE_ACTION_COLOR = '#fbb43a';
const MAXIMIZE_ACTION_COLOR = '#3ec544';

const Window = ({children}) => {
  return (
    <Element b="bordered" borderRadius="m" boxShadow="m">
      <Layout align="center" bb="bordered" p="m" spacing="s">
        <Dot color={CLOSE_ACTION_COLOR} size={ACTION_SIZE} />
        <Dot color={MINIMIZE_ACTION_COLOR} size={ACTION_SIZE} />
        <Dot color={MAXIMIZE_ACTION_COLOR} size={ACTION_SIZE} />
      </Layout>
      {children}
    </Element>
  );
};

export default Window;
