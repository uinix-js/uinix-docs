import React from 'react';
import {Text} from 'uinix-ui';

import {bar, nothing, styled} from '../renderers.js';

const renderers = {
  breakpoints: bar(),
  fontFaces: (_, name) => {
    return (
      <Text fontFamily={name}>The quick brown fox jumps over the lazy dog</Text>
    );
  },
  global: styled(true),
  rules: nothing(),
  variants: styled(),
};

export default renderers;
