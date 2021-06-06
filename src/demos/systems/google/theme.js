import {createTheme} from 'uinix-ui';

const borderStyles = {
  solid: 'solid',
};

const borderWidths = {
  s: '1px',
  l: '4px',
};

const colors = {
  border: {
    default: '#dfe1e5',
  },
  background: {
    light: 'rgba(60,64,67,0.08)',
    wash: '#f2f2f2',
  },
  brand: {
    link: '#1a0dab',
    linkVisited: '#609',
    primary: '#2b7de9',
    blue: '#4285f4',
    red: '#ea4335',
    yellow: '#fbbc05',
    green: '#34a853',
  },
  icon: {
    default: '#5f6368',
  },
  text: {
    primary: '#202124',
    secondary: '#4d5156',
    gray1: '#70757a',
    gray2: '#5f6368',
    gray3: '#3c4043',
  },
};

const theme = createTheme({
  colors,
  borders: {
    bordered: `${borderWidths.s} ${borderStyles.solid} ${colors.border.default}`,
    tab: `${borderWidths.l} ${borderStyles.solid} ${colors.brand.primary}`,
  },
  borderStyles,
  borderWidths,
  fontFamilies: {
    body: 'arial, sans-serif',
    google: 'OpenSans, arial, sans-serif', // Note: 'Google Sans' is not openly licensed, using OpenSans as a close replacement
  },
  fontSizes: {
    small: '12px',
    body: '14px',
    subtitle: '20px',
    subtitle2: '16px',
    title: '24px',
  },
  fontWeights: {
    normal: 'normal',
    bold: 'bold',
    bolder: 'bolder',
  },
  lineHeights: {
    body: '1.58',
    heading: '1.3',
    title: '1.34',
  },
  radii: {
    m: '4px',
    l: '8px',
    pill: '100vh',
    round: '100%',
  },
  shadows: {
    buttonLink: {
      hovered:
        '0 1px 2px 0 rgba(66,133,244,0.3),0 1px 3px 1px rgba(66,133,244,0.15)',
    },
    search: {
      default: '0 2px 5px 1px rgba(64,60,67,.16)',
      hovered: '0 2px 8px 1px rgba(64,60,67,.24)',
    },
  },
  sizes: {
    height: {
      input: '40px',
    },
    icon: {
      s: '16px',
      m: '20px',
      l: '24px',
      logo: '90px',
    },
    width: {
      aside: '366px',
      container: '652px',
      search: '690px',
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
    offset: {
      containerLeft: '164px',
    },
  },
});

export default theme;
