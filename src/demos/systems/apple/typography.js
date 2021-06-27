import sfPro from './assets/fonts/sf-pro-regular.ttf';

const typography = {
  fontFaces: {
    SFPro: {
      src: [sfPro],
    },
  },
  global: {
    a: {
      color: 'interaction.link',
    },
    body: {
      fontFamily: 'body',
      fontWeight: 'body',
      fontSize: 'body',
      letterSpacing: 'body',
      lineHeight: 'body',
      '-mozFontFeatureSettings': 'kern',
      '-mozOsxFontSmoothing': 'grayscale',
    },
    h1: {
      fontSize: 'h1',
      fontWeight: 'bolder',
      letterSpacing: 'h1',
      lineHeight: 'h1',
    },
    h2: {
      fontSize: 'h2',
      fontWeight: 'bolder',
      letterSpacing: 'h2',
      lineHeight: 'h2',
    },
    sup: {
      fontColor: 'text.secondary',
      fontSize: 'sup',
      fontWeight: 'body',
      lineHeight: 'sup',
    },
  },
  variants: {
    footnoteLink: {
      fontWeight: 'body',
      color: 'text.secondary',
      ':hover': {
        color: 'interaction.linkHover',
        textDecoration: 'none',
      },
    },
    headerLink: {
      color: 'text.inverse',
      fontSize: 'body',
      fontWeight: 'body',
      opacity: 'fade',
      ':hover': {
        opacity: 'visible',
        textDecoration: 'none',
      },
    },
    small: {
      fontSize: 'small',
      letterSpacing: 'normal',
      lineHeight: 'small',
    },
    subtitle: {
      fontSize: 'subtitle',
      letterSpacing: 'subtitle',
      lineHeight: 'subtitle',
    },
    textLink: {
      fontSize: 'small',
      letterSpacing: 'normal',
      color: 'text.secondary',
      ':hover': {
        color: 'interaction.linkHover',
      },
    },
    title: {
      fontSize: 'title',
      fontWeight: 'bold',
      letterSpacing: 'title',
      lineHeight: 'title',
    },
    badge: {
      fontSize: 'badge',
      fontWeight: 'bold',
      letterSpacing: 'badge',
      lineHeight: 'badge',
    },
    badgeInfo: {
      fontFamily: 'body',
      fontWeight: 'bold',
      fontSize: 'body',
      letterSpacing: 'body',
      lineHeight: 'body',
    },
  },
};

export default typography;
