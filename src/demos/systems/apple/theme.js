import {createTheme} from 'uinix-ui';

const borderStyles = {
  solid: 'solid',
};

const borderWidths = {
  s: '1px',
  m: '2px',
};

const colors = {
  background: {
    primary: '#ffffff',
    inverse: 'rgba(0,0,0,0.92)',
    wash: '#f7f7f7',
    footer: '#f5f5f7',
  },
  border: {
    default: '#e8e8ed',
    dark: '#d2d2d7',
    selected: '#0066cc',
  },
  interaction: {
    button: '#0071e3',
    buttonHover: '#0077ED',
    link: '#0066cc',
    linkHover: '#1d1d1f',
  },
  macbook: {
    gold: '#e3ccb4',
    silver: '#c7c8ca',
    spacegray: '#b1b2b7',
  },
  text: {
    primary: '#000000',
    secondary: '#515154',
    light: '#86868b',
    inverse: '#f5f5f7',
  },
};

const theme = createTheme({
  borderStyles,
  borderWidths,
  borders: {
    bordered: `${borderWidths.s} ${borderStyles.solid} ${colors.border.default}`,
    dark: `${borderWidths.s} ${borderStyles.solid} ${colors.border.dark}`,
    selected: `${borderWidths.m} ${borderStyles.solid} ${colors.border.selected}`,
  },
  colors,
  fontFamilies: {
    body: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif', // Note: 'SF Pro' is not openly licensed, using Roboto as a close replacement
  },
  fontSizes: {
    small: '12px',
    sup: '0.6em',
    body: '17px',
    subtitle: '21px',
    title: '32px',
    h1: '64px',
    h2: '24px',
    badge: '68px',
  },
  fontWeights: {
    body: 400,
    bold: 600,
  },
  letterSpacings: {
    body: '-0.022em',
    subtitle: '0.011em',
    title: '0.0004em',
    h1: '-0.009em',
    h2: '0.009em',
    badge: '-0.0001em',
  },
  lineHeights: {
    small: 1.333_37,
    sup: 1.25,
    body: 1.470_59,
    subtitle: 1.381,
    title: 1.25,
    h1: 1.0625,
    h2: 1.166_67,
    badge: 1,
  },
  opacities: {
    fade: 0.8,
    visible: 1,
  },
  radii: {
    m: '5px',
    pill: '100vh',
  },
  sizes: {
    height: {
      badge: '124px',
      macbookContainer: '144px',
    },
    icon: {
      s: '18px',
      m: '24px',
      image: '54px',
    },
    width: {
      container: '980px',
    },
  },
  spacings: {
    xs: '2px',
    x1: '4px',
    x2: '8px',
    x3: '12px',
    x4: '16px',
    x5: '20px',
    x6: '24px',
    x7: '28px',
    x8: '32px',
    x9: '36px',
    x10: '40px',
    x11: '44px',
    x12: '48px',
    x13: '52px',
    x14: '56px',
    x15: '60px',
    x16: '64px',
    x17: '68px',
    x18: '72px',
    x19: '76px',
    x20: '80px',
    x21: '84px',
    x22: '88px',
    x23: '92px',
    x24: '96px',
    x25: '100px',
    x26: '104px',
    x27: '108px',
    x28: '112px',
    x29: '116px',
    x30: '120px',
    x31: '124px',
    x32: '128px',
    x33: '132px',
    x34: '136px',
    x35: '140px',
  },
});

export default theme;
