import googleSans from './assets/fonts/google-sans-regular.ttf';

const headingStyle = {
  fontWeight: 'normal',
  lineHeight: 'heading',
  margin: 0,
  padding: 0,
};

const typography = {
  fontFaces: {
    GoogleSans: {
      src: [googleSans],
    },
  },
  global: {
    a: {
      color: 'brand.link',
    },
    body: {
      fontFamily: 'body',
      fontSize: 'body',
      lineHeight: 'body',
    },
    cite: {
      fontStyle: 'normal',
    },
    h1: headingStyle,
    h2: headingStyle,
    h3: headingStyle,
    h4: headingStyle,
    h5: headingStyle,
    h6: headingStyle,
  },
  variants: {
    alphabet: {
      fontFamily: 'google',
      fontSize: 'xl',
      fontWeight: 'bold',
    },
    button: {
      backgroundColor: 'brand.primary',
      border: 'none',
      borderRadius: 'm',
      color: 'white',
      flex: 'none',
      fontFamily: 'google',
      fontSize: 'body',
      paddingBottom: 'x2',
      paddingLeft: 'x6',
      paddingRight: 'x6',
      paddingTop: 'x2',
      ':hover': {
        boxShadow: 'buttonLink.hovered',
      },
    },
    input: {
      fontFamily: 'body',
      fontSize: 'm',
    },
    gray: {
      color: 'text.gray1',
      fontSize: 'body',
    },
    grayLink: {
      color: 'text.gray1',
      fontSize: 'body',
      ':hover': {
        color: 'text.gray3',
      },
    },
    google: {
      fontFamily: 'google',
    },
    googleGray: {
      color: 'text.gray1',
      fontFamily: 'google',
    },
    grayEmphasized: {
      color: 'text.gray3',
      fontWeight: 'bold',
    },
    subtitle: {
      fontSize: 'subtitle',
    },
    subtitle2: {
      fontFamily: 'body',
      fontSize: 'subtitle2',
    },
    title: {
      color: 'text.primary',
      fontFamily: 'google',
      fontSize: 'title',
      lineHeight: 'title',
    },
  },
};

export default typography;
