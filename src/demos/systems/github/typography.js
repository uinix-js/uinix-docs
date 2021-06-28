const headingStyle = {
  margin: 0,
  padding: 0,
};

const typography = {
  global: {
    body: {
      color: 'text.primary',
      fontFamily: 'body',
      fontSize: 'body',
      lineHeight: 'body',
      '-mozOsxFontSmoothing': 'unset',
    },
    a: {
      color: 'text.blue',
    },
    h1: headingStyle,
    h2: headingStyle,
    h3: headingStyle,
    h4: headingStyle,
    h5: headingStyle,
    h6: headingStyle,
  },
  variants: {
    button: {
      fontSize: 'small',
      fontWeight: 'medium',
    },
    pill: {
      backgroundColor: 'background.blueWash',
      borderRadius: 'pill',
      color: 'text.blue',
      cursor: 'pointer',
      fontSize: 's',
      paddingBottom: 'xxs',
      paddingLeft: 'pill.x',
      paddingRight: 'pill.x',
      paddingTop: 'xxs',
      ':hover': {
        backgroundColor: 'hover.blueWash',
      },
    },
    small: {
      color: 'text.secondary',
      fontSize: 'small',
    },
    link: {
      color: 'text.tertiary',
      cursor: 'pointer',
      ':hover': {
        color: 'text.blue',
      },
    },
    linkBold: {
      color: 'text.primary',
      cursor: 'pointer',
      fontWeight: 'bold',
      ':hover': {
        color: 'text.blue',
      },
    },
    linkText: {
      cursor: 'pointer',
      ':hover': {
        color: 'text.blue',
      },
    },
    subtitle: {
      color: 'text.primary',
      fontSize: 'subtitle',
    },
    title: {
      color: 'text.primary',
      fontWeight: 'normal',
      fontSize: 'title',
      whiteSpace: 'nowrap',
    },
    navItem: {
      fontSize: 'body',
      lineHeight: 'navItem',
    },
  },
};

export default typography;
