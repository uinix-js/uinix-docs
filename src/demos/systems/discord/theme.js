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
    channelTextarea: '#40444b',
    primary: '#36393f',
    secondary: '#2f3136',
    secondaryAlt: '#292b2f',
    tertiary: '#202225',
    accent: '#4f545c',
    floating: '#18191c',
    mentioned: 'rgba(250,166,26,0.05)',
    mentionedHover: 'rgba(250,166,26,0.08)',
    messageHover: 'rgba(4,4,5,0.07)',
    primaryHovered: '#8ea1e1',
    modifier: {
      accent: 'hsla(0,0%,100%,0.06)',
      active: 'rgba(79,84,92,0.24)',
      hover: 'rgba(79,84,92,0.16)',
      selected: 'rgba(79,84,92,0.32)',
    },
  },
  brand: {
    blurple: '#7289da',
    fullWhite: '#ffffff',
    greple: '#99aab5',
    darkButNotBlack: '#2c2cf33',
    notQuiteBlack: '#23272a',
    actuallyBlack: '#000000',
  },
  channel: {
    default: '#8e9297',
  },
  focus: {
    primary: '#00b0f4,',
  },
  header: {
    primary: '#fff',
    secondary: '#b9bbbe',
  },
  interactive: {
    normal: '#b9bbbe',
    hover: '#dcddde',
    active: '#fff',
    muted: '#4f545c',
  },
  user: {
    role: {
      1: 'rgb(255, 146, 0)',
      2: 'rgb(52, 152, 219)',
      3: 'rgb(155, 89, 182)',
      4: 'rgb(46, 204, 113)',
    },
  },
  status: {
    online: '#43b581',
    inactive: '#faa61a',
    negate: '#f04747',
  },
  tone: {
    success: '#43b581',
  },
  text: {
    accent: 'white',
    normal: '#dcddde',
    muted: '#72767d',
    link: '#00b0f4',
  },
};

const theme = createTheme({
  borders: {
    bordered: `${borderWidths.s} ${borderStyles.solid} ${colors.background.modifier.accent}`,
  },
  borderStyles,
  borderWidths,
  colors,
  fontFamilies: {
    body: 'Whitney, Helvetica Neue, Helvetica, Arial, sans-serif',
    monospace:
      'Consolas, Andale Mono WT, Andale Mono, Lucida Console, Lucida Sans Typewriter, DejaVu Sans Mono, Bitstream Vera Sans Mono, Liberation Mono, Nimbus Mono L, Monaco, Courier New, Courier, monospace',
  },
  fontSizes: {
    s: '0.625rem',
    m: '12px',
    l: '16px',
    body: '14px',
    message: {
      s: '0.6875rem',
      m: '1rem',
    },
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 700,
  },
  lineHeights: {
    s: '13px',
    m: '16px',
    l: '20px',
    message: '1.375rem',
  },
  opacities: {
    inactive: 0.3,
    invisible: 0,
    visible: 1,
  },
  radii: {
    s: '3px',
    m: '4px',
    l: '12px',
    round: '100%',
  },
  shadows: {
    elevation: {
      stroke: '0 0 0 1px rgba(4,4,5,0.15)',
      s: '0 1px 0 rgba(4,4,5,0.2),0 1.5px 0 rgba(6,6,7,0.05),0 2px 0 rgba(4,4,5,0.05)',
      m: '0 4px 4px rgba(0,0,0,0.16)',
      l: '0 8px 16px rgba(0,0,0,0.24)',
    },
  },
  sizes: {
    avatar: {
      s: '24px',
      m: '32px',
      l: '48px',
    },
    icon: {
      s: '16px',
      m: '20px',
      l: '24px',
      logo: '28px',
    },
    height: {
      header: '48px',
      chat: '44px',
      viewport: '100vh',
    },
    width: {
      sidebar: {
        channels: '240px',
        members: '240px',
        servers: '72px',
      },
      search: '144px',
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
    rotateNegative90: 'rotate(-90deg)',
  },
  transitions: {
    all: {
      default: 'all 0.1s ease-in-out',
    },
    color: {
      default: 'background-color 0.2s ease, color 0.2s ease',
    },
    opacity: {
      fast: 'opacity 0.2s ease-in-out',
    },
  },
});

export default theme;
