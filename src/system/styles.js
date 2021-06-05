const breakpoints = ['480px', '768px'];

const rules = {
  interactive: ({onClick}) => ({
    cursor: onClick ? 'pointer' : undefined,
    ':hover': {
      opacity: onClick ? 'interactive' : undefined,
    },
  }),
};

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
    },
  },
};

const variants = {
  nav: {
    list: {
      margin: 0,
      padding: 0,
      item: {
        fontSize: 'm',
        listStyleType: 'none',
      },
    },
  },
};

const styles = {
  ...rules,
  breakpoints,
  global,
  typography,
  variants,
};

export default styles;
