import palx from 'palx';

const palette = palx('#0366d6');

const borderColors = {
  default: palette.gray[2],
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

const fontSizes = {
  s: '0.8rem',
  m: '1rem',
  l: '1.25rem',
  xl: '1.5rem',
  xxl: '2rem',
};

const lineHeights = {
  body: '1.5',
};

const opacities = {
  invisible: '0',
  disabled: '0.3',
  interactive: '0.7',
  visible: '1',
};

const radii = {
  s: '2px',
  m: '4px',
  round: '100%',
};

const shadows = {
  m: '0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)',
};

const sizes = {
  icon: {
    s: '16px',
    m: '24px',
    l: '32px',
  },
  widths: {
    container: '768px',
  },
};

const spacings = {
  xs: '0.25rem',
  s: '0.5rem',
  m: '1rem',
  l: '2rem',
  xl: '4rem',
  offsets: {
    anchor: 20,
  },
};

const transitions = {
  fade: 'opacity 0.2s ease-in-out',
};

const zIndices = {
  forward: '1',
};

const theme = {
  borders,
  borderColors,
  borderWidths,
  colors,
  fontFamilies,
  fontSizes,
  lineHeights,
  opacities,
  radii,
  shadows,
  sizes,
  spacings,
  transitions,
  zIndices,
};

export default theme;
