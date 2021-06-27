const breakpoints = ['480px', '768px'];

const rules = {
  interactive: ({onClick}) => ({
    cursor: onClick ? 'pointer' : undefined,
    transition: 'fade',
    ':hover': {
      opacity: onClick ? 'interactive' : undefined,
    },
  }),
  truncate: ({truncate}) =>
    truncate
      ? {
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }
      : null,
};

const classes = {
  // .anchor links
  ':hover > .anchor': {
    opacity: 'visible',
  },
  '.anchor': {
    opacity: 'invisible',
    position: 'absolute',
    left: '-offsets.anchor',
  },
  '.anchor:hover svg': {
    fill: 'text.link',
  },
};

const global = {
  '*': {
    boxSizing: 'border-box',
  },
  body: {
    backgroundColor: 'background.primary',
    margin: 0,
    padding: 0,
  },
  hr: {
    border: 'bordered',
    width: '100%',
  },
  ...classes,
};

const typography = {
  global: {
    body: {
      color: 'text.primary',
      fontFamily: 'body',
      fontSize: 'm',
      lineHeight: 'body',
    },
    a: {
      color: 'text.link',
      textDecoration: 'none',
      transition: 'fade',
    },
    'a:hover': {
      opacity: 'interactive',
    },
    blockquote: {
      borderLeft: 'bordered',
      borderWidth: 'l',
      fontStyle: 'italic',
      marginLeft: 0,
      marginBottom: 'm',
      marginRight: 0,
      marginTop: 'm',
      paddingLeft: 'm',
    },
    code: {
      backgroundColor: 'background.tones.faded',
      borderRadius: 's',
      fontFamily: 'monospace',
    },
    h1: {
      marginBottom: 'm',
      fontSize: 'xxl',
      fontWeight: 'bold',
      marginTop: 'xl',
    },
    h2: {
      marginBottom: 'm',
      fontSize: 'xl',
      fontWeight: 'bold',
      marginTop: 'xl',
    },
    h3: {
      marginBottom: 'm',
      fontSize: 'l',
      fontWeight: 'bold',
      marginTop: 'l',
    },
    h4: {
      marginBottom: 's',
      fontSize: 'm',
      fontWeight: 'bold',
      marginTop: 'm',
    },
    pre: {
      backgroundColor: 'background.tones.faded',
      border: 'bordered',
      fontFamily: 'monospace',
      fontSize: 's',
      margin: 0,
      overflow: 'auto',
      padding: 'm',
    },
    'ol, ul': {
      margin: 0,
      marginBottom: 'm',
      marginTop: 'm',
      marginLeft: 'l',
      padding: 0,
    },
    li: {
      marginBottom: 'm',
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
    chip: {
      backgroundColor: 'background.tones.faded',
      border: 'bordered',
      borderRadius: 'm',
      color: 'text.secondary',
      paddingLeft: 'xs',
      paddingRight: 'xs',
      fontSize: 's',
    },
    description: {
      color: 'text.secondary',
      fontSize: 's',
    },
    headingLink: {
      all: 'unset',
      fontSize: 'm',
      fontWeight: 'bold',
    },
  },
};

const variants = {
  layout: {
    container: {
      height: '100vh',
      margin: '0 auto',
      paddingLeft: 'l',
      paddingRight: 'l',
      width: ['100%', '100%', 'widths.container'],
    },
  },
  nav: {
    list: {
      margin: 0,
      padding: 0,
      item: {
        display: 'inline',
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
