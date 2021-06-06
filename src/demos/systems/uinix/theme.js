import palx from 'palx';
import {createTheme} from 'uinix-ui';

const baseFontFamily =
  'apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol';

const borderStyles = {
  dashed: 'dashed',
  solid: 'solid',
};

const borderWidths = {
  s: '1px',
};

const brandPrimaryColor = '#0366d6';
const palette = Object.entries(palx(brandPrimaryColor)).reduce(
  (acc, [color, values]) => {
    if (!['base', 'black'].includes(color)) {
      acc[color] = {};
      values.forEach((value, i) => {
        acc[color][i] = value;
      });
    }

    return acc;
  },
  {},
);

const brandSecondaryColor = palette.gray[8];
const brandInverseColor = palette.gray[0];
const brandLightColor = palette.gray[6];
const brandLighterColor = palette.gray[1];
const brandWashColor = palette.blue[0];
const brandBorderColor = palette.gray[2];

const theme = createTheme({
  borders: {
    bordered: `${borderWidths.s} ${borderStyles.solid} ${brandBorderColor}`,
  },
  borderStyles,
  borderWidths,
  animations: {
    infinite: {
      fast: '1s ease-in-out infinite',
      default: '2s ease-in-out infinite',
      slow: '5s ease-in-out infinite',
    },
  },
  colors: {
    black: 'black',
    white: 'white',
    brand: {
      active: brandPrimaryColor,
      primary: brandPrimaryColor,
      primaryInverse: brandInverseColor,
      secondary: brandSecondaryColor,
      light: brandLightColor,
      lighter: brandLighterColor,
      wash: brandWashColor,
    },
    icon: {
      default: brandLightColor,
    },
    text: {
      primary: palette.gray[9],
      secondary: palette.gray[6],
    },
  },
  fontFamilies: {
    body: baseFontFamily,
    heading: baseFontFamily,
    monospace: 'menlo, consolas, monospace',
  },
  fontSizes: {
    s: '12px',
    m: '16px',
    l: '20px',
    xl: '28px',
    xxl: '32px',
  },
  fontWeights: {
    body: 400,
    bold: 700,
  },
  keyframes: {
    flicker: {
      '0%': {opacity: '0'},
      '50%': {opacity: '1'},
      '100%': {opacity: '0'},
    },
    spin: {
      '100%': {transform: 'rotate(360deg)'},
    },
  },
  lineHeights: {
    body: 2,
    heading: 1.125,
  },
  letterSpacings: {
    body: 'normal',
    caps: '0.2em',
  },
  opacities: {
    invisible: '0',
    disabled: '0.3',
    interactive: '0.7',
    visible: '1',
  },
  radii: {
    m: '4px',
    pill: '100vh',
    round: '100%',
  },
  shadows: {
    box: `0px 0px 8px 4px rgba(100,100,100,.3)`,
    s: '0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)',
    m: '0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)',
  },
  sizes: {
    dot: {
      m: '12px',
      l: '32px',
    },
    icon: {
      s: '16px',
      m: '24px',
      l: '28px',
      xl: '48px',
    },
    height: {
      preview: {
        header: '32px',
      },
    },
    width: {
      container: '768px',
    },
  },
  spacings: {
    xs: 4,
    s: 8,
    m: 16,
    l: 32,
    xl: 64,
  },
  transforms: {
    rotate0: 'rotate(0deg)',
    rotate180: 'rotate(180deg)',
    scaleHalf: 'scale(0.5)',
    translateXHalf: 'translateX(50%)',
  },
  transitions: {
    all: {
      fast: 'all 0.3s ease-in-out',
      default: 'all 0.7s ease-in-out',
      slow: 'all 1s ease-in-out',
    },
    opacity: {
      fast: 'opacity 0.3s ease-in-out',
      default: 'opacity 0.5s ease-in-out',
      slow: 'opacity 1s ease-in-out',
    },
  },
  zIndices: {
    forward: '1',
    modal: '10',
    tooltip: '11',
  },
});

export default theme;
