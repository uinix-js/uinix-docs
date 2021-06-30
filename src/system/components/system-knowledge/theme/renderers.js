import {bar, box, dot, nothing, text, wrapStyle} from '../renderers.js';

const renderers = {
  borders: box('border'),
  borderStyles: box('borderStyle'),
  borderWidths: box('borderWidth'),
  colors: dot,
  fontFamilies: text('fontFamily'),
  fontSizes: text('fontSize'),
  fontWeights: text('fontWeight'),
  letterSpacings: text('letterSpacing'),
  lineHeights: text('lineHeight', 2),
  opacities: wrapStyle('opacity')(dot('brand.primary')),
  radii: box('borderRadius'),
  shadows: box('boxShadow'),
  sizes: bar,
  spacings: bar,
  zIndices: nothing,
};

export default renderers;
