import palx from 'palx';

const palette = palx('#0366d6');

const animations = {
  infinite: {
    fast: '1s ease-in-out infinite',
    default: '2s ease-in-out infinite',
    slow: '5s ease-in-out infinite',
  },
};

const borderColors = {
  default: 'rgba(0, 0, 0, 0.15)',
};

const borderStyles = {
  solid: 'solid',
};

const borderWidths = {
  s: '1px',
  m: '2px',
  l: '4px',
};

const borders = {
  bordered: `${borderWidths.s} solid ${borderColors.default}`,
};

const colors = {
  background: {
    primary: '#fff',
    tones: {
      error: palette.red[1],
      faded: palette.gray[0],
    },
  },
  brand: {
    primary: palette.base,
    secondary: palette.gray[7],
    light: palette.gray[5],
  },
  icon: {
    default: palette.gray[6],
    light: palette.gray[5],
  },
  text: {
    link: palette.base,
    primary: palette.black,
    secondary: palette.gray[7],
    light: palette.gray[5],
    tones: {
      error: palette.red[7],
      faded: palette.gray[2],
    },
  },
};

const fontFamilies = {
  body: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji',
  monospace: 'menlo, consolas, monospace',
};

const fontWeights = {
  normal: 'normal',
  bold: 'bold',
};

const fontSizes = {
  xs: '0.70rem',
  s: '0.85rem',
  m: '1rem',
  l: '1.25rem',
  xl: '1.5rem',
  xxl: '2rem',
};

const keyframes = {
  flicker: {
    '0%': {opacity: '0'},
    '50%': {opacity: '1'},
    '100%': {opacity: '0'},
  },
  spin: {
    '100%': {transform: 'rotate(360deg)'},
  },
};

const letterSpacings = {
  spaced: '0.3rem',
};

const lineHeights = {
  body: '1.5',
};

const opacities = {
  invisible: '0',
  disabled: '0.3',
  defocused: '0.5',
  interactive: '0.8',
  visible: '1',
};

const radii = {
  s: '2px',
  m: '4px',
  round: '100%',
};

const shadows = {
  s: 'rgba(0, 0, 0, 0.05) 0px 1px 2px 0px',
  m: 'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;',
};

const sizes = {
  anchor: '12px',
  icon: {
    s: '16px',
    m: '20px',
    l: '24px',
  },
  spec: {
    icon: '100px',
    name: '160px',
  },
  width: {
    container: '768px',
    toc: '300px',
  },
};

const spacings = {
  anchor: '12px',
  chip: '6px',
  xxs: '2px',
  xs: '4px',
  s: '8px',
  m: '16px',
  l: '32px',
  xl: '64px',
  xxl: '128px',
};

const transitions = {
  fade: 'opacity 0.2s ease-in-out',
};

const transforms = {
  rotate90: 'rotate(90deg)',
  translateXHalf: 'translateX(-50%)',
  translateYHalf: 'translateY(-50%)',
};

const zIndices = {
  forward: '1',
};

const theme = {
  animations,
  borders,
  borderColors,
  borderStyles,
  borderWidths,
  colors,
  fontFamilies,
  fontSizes,
  fontWeights,
  keyframes,
  letterSpacings,
  lineHeights,
  opacities,
  radii,
  shadows,
  sizes,
  spacings,
  transitions,
  transforms,
  zIndices,
};

export default theme;
