import spotifyCircular from './assets/fonts/spotify-circular-regular.ttf';

const headingStyle = {
  margin: 0,
};

const typography = {
  fontFaces: {
    SpotifyCircular: {
      src: [spotifyCircular],
    },
  },
  global: {
    body: {
      color: 'text.secondary',
      fontFamily: 'body',
      letterSpacing: 'normal',
      '-mozOsxFontSmoothing': 'grayscale',
    },
    a: {
      color: 'text.primary',
    },
    code: {
      backgroundColor: 'background.gray1',
    },
    h1: headingStyle,
    h2: headingStyle,
    h3: headingStyle,
    h4: headingStyle,
    h5: headingStyle,
    h6: headingStyle,
  },
  variants: {
    caps: {
      fontSize: 's',
      fontWeight: 'bold',
      letterSpacing: 'caps',
      lineHeight: 's',
      textTransform: 'uppercase',
    },
    nav: {
      color: 'text.secondary',
      fontSize: 'm',
      fontWeight: 'bold',
      lineHeight: 's',
      transition: 'default',
      ':hover': {
        color: 'text.primary',
      },
    },
    xs: {
      fontSize: 'xs',
      lineHeight: 's',
    },
    s: {
      fontSize: 's',
      fontWeight: 'normal',
      lineHeight: 's',
    },
    m: {
      fontSize: 'm',
      lineHeight: 'm',
    },
    xl: {
      color: 'text.primary',
      fontSize: 'xl',
      fontWeight: 'bold',
      lineHeight: 'l',
    },
    xxl: {
      color: 'text.primary',
      fontSize: 'xxl',
      fontWeight: 'bold',
      lineHeight: 'l',
    },
  },
};

export default typography;
