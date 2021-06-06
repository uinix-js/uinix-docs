import openSansWoff from './assets/fonts/open-sans-all-400-normal.woff';

const headingStyle = {
  fontWeight: 'normal',
  lineHeight: 'heading',
  margin: 0,
  padding: 0,
};

const typography = {
  fontFaces: {
    OpenSans: {
      src: [openSansWoff],
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
    buttonLink: {
      borderRadius: 'm',
      backgroundColor: 'brand.primary',
      color: 'white',
      fontFamily: 'google',
      fontSize: 'body',
      ':hover': {
        boxShadow: 'buttonLink.hovered',
      },
    },
    input: {
      fontFamily: 'body',
      fontSize: 'm',
    },
    alphabet: {
      fontFamily: 'google',
      fontSize: 'xl',
      fontWeight: 'bold',
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
