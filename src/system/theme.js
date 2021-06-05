import palx from 'palx';

const palette = palx('#0366d6');

const colors = {
  background: {
    base: '#fff',
    tones: {
      error: palette.red[1],
      light: palette.gray[0],
    },
  },
  brand: {
    primary: palette.base,
    secondary: palette.gray[8],
    tertiary: palette.gray[5],
  },
  text: {
    link: palette.base,
    primary: palette.gray[9],
    secondary: palette.gray[8],
    light: palette.gray[5],
    tones: {
      error: palette.red[5],
      light: palette.gray[1],
    },
  },
};

const fontFamilies = {
  body: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol',
};

const fontSizes = {
  s: '12px',
  m: '16px',
  l: '20px',
  xl: '28px',
  xxl: '32px',
};

const opacities = {
  invisible: '0',
  disabled: '0.3',
  interactive: '0.7',
  visible: '1',
};

const radii = {
  m: '4px',
  round: '100%',
};

const sizes = {
  icon: {
    m: '24px',
  },
  widths: {
    container: '768px',
  },
};

const spacings = {
  xs: 4,
  s: 8,
  m: 16,
  l: 32,
  xl: 64,
};

const transitions = {
  fade: 'opacity 0.2s ease-in-out',
};

const zIndices = {
  forward: '1',
};

const theme = {
  colors,
  fontFamilies,
  fontSizes,
  opacities,
  radii,
  sizes,
  spacings,
  transitions,
  zIndices,
};

export default theme;
