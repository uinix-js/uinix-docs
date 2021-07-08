import React from 'react';

import Box from '../../box.js';
import {bar, box, dot, nothing, text} from '../renderers.js';

const renderers = {
  animations: (value) => (
    <Box
      styles={{
        animation: value,
        animationName: 'flicker',
      }}
    >
      Useable with an animationName theme value from theme.keyframes.
    </Box>
  ),
  borders: box('border'),
  borderStyles: box('borderStyle'),
  borderWidths: box('borderWidth'),
  colors: dot(),
  fontFamilies: text('fontFamily'),
  fontSizes: text('fontSize'),
  fontWeights: text('fontWeight'),
  keyframes: (value) => (
    <Box
      styles={{
        animation: '1s ease-in-out infinite',
        animationName: value,
      }}
    >
      Useable with a valid animation theme value from theme.animations.
    </Box>
  ),
  letterSpacings: text('letterSpacing'),
  lineHeights: text('lineHeight', 2),
  opacities: dot('opacity', 'brand.primary'),
  radii: box('borderRadius'),
  shadows: box('boxShadow'),
  sizes: bar(),
  spacings: bar(),
  transforms: box('transform'),
  transitions: (value) => (
    <Box
      styles={[
        {
          transition: value,
        },
        {
          backgroundColor: 'brand.wash',
          border: 'bordered',
          borderColor: 'brand.secondary',
          borderRadius: 'm',
          borderStyle: 'dashed',
          borderWidth: 's',
          boxShadow: 's',
          color: 'brand.secondary',
          fontWeight: 'bold',
          fontSize: 's',
          opacity: 'disabled',
          padding: 's',
          ':hover': {
            backgroundColor: 'brand.lighter',
            borderColor: 'brand.primary',
            borderRadius: 'pill',
            borderStyle: 'solid',
            borderWidth: 'm',
            boxShadow: 'm',
            color: 'brand.primary',
            fontSize: 'l',
            fontWeight: 'body',
            opacity: 'visible',
            padding: 'm',
          },
        },
      ]}
    >
      Hover to test common transition properties.
    </Box>
  ),
  zIndices: nothing(),
};

export default renderers;
