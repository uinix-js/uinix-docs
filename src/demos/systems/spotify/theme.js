import {createTheme} from 'uinix-ui';

const borderStyles = {
  solid: 'solid',
};

const borderWidths = {
  s: '1px',
};

const colors = {
  brand: {
    black: 'black',
    primary: '#1ed760',
    white: 'white',
  },
  hover: {
    primary: '#1ED760',
  },
  background: {
    gray0: '#b3b3b3',
    gray1: '#535353',
    gray2: '#282828',
    gray3: '#181818',
    gray4: '#121212',
  },
  icon: {
    default: '#b3b3b3',
    active: 'white',
  },
  text: {
    primary: 'white',
    secondary: '#b3b3b3',
  },
};

const theme = createTheme({
  borders: {
    bordered: `${borderWidths.s} ${borderStyles.solid} ${colors.background.gray1}`,
  },
  borderStyles,
  borderWidths,
  colors,
  fontFamilies: {
    body: 'Montserrat, arial, sans-serif',
  },
  fontWeights: {
    normal: 400,
    bold: 700,
  },
  fontSizes: {
    body: '14px',
    xxs: '9px',
    xs: '11px',
    s: '12px',
    m: '14px',
    l: '16px',
    xl: '24px',
    xxl: '32px',
  },
  letterSpacings: {
    normal: 'normal',
    caps: '0.1em',
  },
  lineHeights: {
    s: '16px',
    m: '24px',
    l: '36px',
  },
  opacities: {
    invisible: '0',
    visible: '1',
  },
  radii: {
    m: '4px',
    pill: '100vh',
    round: '100%',
  },
  shadows: {
    m: '0 8px 8px rgba(0,0,0,.3)',
    l: '0 8px 24px rgba(0,0,0,.5)',
  },
  sizes: {
    badge: '4px',
    icon: {
      m: '16px',
      l: '24px',
      logo: '130px',
    },
    cover: {
      s: '56px',
      m: '80px',
      l: '158px',
    },
    height: {
      bar: '5px',
      footer: '90px',
    },
    width: {
      summaryCard: '200px',
      footerSection: '180px',
      nav: '232px',
      volume: '120px',
    },
  },
  spacings: {
    xxs: 2,
    xs: 4,
    s: 8,
    m: 16,
    l: 32,
    xl: 64,
  },
  transforms: {
    iconScale: 'scale(1.05)',
    nudgeUp: 'translateY(-12px)',
    translateXHalf: 'translateX(-50%)',
  },
  transitions: {
    cubicBezier: 'none 33ms cubic-bezier(.3,0,0,1)',
    default: 'all 0.3s ease',
  },
  zIndices: {
    forward: '1',
  },
});

export default theme;
