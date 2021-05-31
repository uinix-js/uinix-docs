const breakpoints = ['480px', '768px'];

const global = {
  '*': {
    boxSizing: 'border-box',
  },
  html: {
    scrollBehavior: 'smooth',
  },
  body: {
    margin: 0,
    padding: 0,
  },
  'ol, ul': {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
  },
};

const typography = {
  global: {
    a: {
      color: 'text.link',
      textDecoration: 'none',
      transition: 'fade',
    },
    'a:hover': {
      opacity: 'interactive',
    },
    body: {
      fontFamily: 'body',
      fontSize: 'm',
    },
    h1: {
      fontSize: 'xxl',
    },
    h2: {
      fontSize: 'xl',
    },
    h3: {
      fontSize: 'l',
    },
    h4: {
      fontSize: 'm',
    },
  },
  variants: {
    brand: {
      fontSize: 'l',
      fontWeight: 'bold',
      margin: 0,
      paddingBottom: 's',
      paddingTop: 's',
    },
    nav: {
      fontSize: 'm',
      fontWeight: 'bold',
    },
  },
};

const styles = {
  breakpoints,
  global,
  typography,
};

export default styles;
