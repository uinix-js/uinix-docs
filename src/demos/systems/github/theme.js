import {createTheme} from 'uinix-ui';

const baseFontFamily =
  '-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji';

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
    secondary: '#fafbfc',
    tertiary: '#f6f8fa',
    blueWash: '#f1f8ff',
  },
  border: {
    default: 'rgba(27, 31, 35, 0.15)',
    blue: '#c8e1ff',
  },
  text: {
    blue: '#0366d6',
    primary: '#24292e',
    secondary: '#586069',
    tertiary: '#6a737d',
    light: '#d1d5da',
  },
  icon: {
    default: '#959da5',
    directory: '#79b8ff',
  },
  hover: {
    blueWash: '#d6e9fb',
    gray: '#f3f4f6',
    success: '#2c974b',
  },
  language: {
    js: '#f1e05a',
  },
  tone: {
    attention: '#f9826c',
    success: '#2ea44f',
  },
};

const theme = createTheme({
  borders: {
    bordered: `${borderWidths.s} ${borderStyles.solid} ${colors.border.default}`,
  },
  borderStyles,
  borderWidths,
  colors,
  fontFamilies: {
    body: baseFontFamily,
  },
  fontSizes: {
    small: '12px',
    body: '14px',
    subtitle: '16px',
    title: '20px',
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 600,
  },
  lineHeights: {
    body: 1.5,
    navItem: '30px',
    pill: '22px',
  },
  radii: {
    m: '4px',
    pill: '100vh',
    round: '100%',
  },
  shadows: {
    button: `inset 0 -1px 0 ${colors.border.default}, inset 0 1px 0 hsla(0, 0%, 100%, 0.25)`,
    nav: `inset 0 -1px 0 ${colors.border.default}`,
  },
  sizes: {
    avatar: {
      m: '24px',
    },
    dot: {
      s: '8px',
    },
    height: {
      bar: '6px',
      button: '28px',
    },
    icon: {
      m: '16px',
    },
    width: {
      aside: '280px',
      main: '1280px',
    },
  },
  spacings: {
    xxs: 2,
    xs: 4,
    s: 8,
    m: 16,
    l: 32,
    xl: 64,
    pill: {
      x: 12,
    },
  },
});

export default theme;
