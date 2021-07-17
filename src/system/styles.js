const breakpoints = ['480px', '768px'];

const rules = {
  disabled: ({disabled}) =>
    disabled
      ? {
          opacity: 'disabled',
          pointerEvents: 'none',
        }
      : null,
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
    alignItems: 'center',
    display: 'flex',
    height: '100%',
    left: '-anchor',
    opacity: 'invisible',
    position: 'absolute',
  },
  '.anchor svg': {
    height: 'anchor',
    width: 'anchor',
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
  button: {
    backgroundColor: 'transparent',
    border: 'bordered',
    borderRadius: 'm',
    color: 'text.primary',
    fontSize: 's',
    fontWeight: 'bold',
    paddingBottom: 's',
    paddingLeft: 'm',
    paddingRight: 'm',
    paddingTop: 's',
  },
  hr: {
    border: 'none',
    borderBottom: 'bordered',
    width: '100%',
  },
  table: {
    border: 'bordered',
    borderCollapse: 'collapse',
  },
  td: {
    border: 'bordered',
    paddingLeft: 'm',
    paddingRight: 'm',
  },
  th: {
    border: 'bordered',
    paddingLeft: 'm',
    paddingRight: 'm',
    whiteSpace: 'nowrap',
  },
  tr: {
    verticalAlign: 'top',
  },
  ...classes,
};

const defaultChip = {
  backgroundColor: 'tones.light.faded',
  borderRadius: 'm',
  color: 'text.secondary',
  paddingLeft: 'chip',
  paddingRight: 'chip',
  fontSize: 'xs',
};

const typography = {
  global: {
    body: {
      color: 'text.primary',
      fontFamily: 'body',
      fontSize: 'm',
      lineHeight: 'body',
      '-mozOsxFontSmoothing': 'grayscale',
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
      backgroundColor: 'tones.light.faded',
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
      backgroundColor: 'tones.light.faded',
      border: 'bordered',
      fontFamily: 'monospace',
      fontSize: 's',
      margin: 0,
      overflow: 'auto',
      padding: 'm',
    },
    summary: {
      cursor: 'pointer',
      fontSize: 's',
      fontWeight: 'bold',
    },
    'summary:hover': {
      opacity: 'interactive',
    },
  },
  variants: {
    brand: {
      flex: 'none',
      fontSize: 'l',
      fontWeight: 'bold',
      margin: 0,
      paddingBottom: 's',
      paddingTop: 's',
    },
    chip: {
      accent: {
        ...defaultChip,
        backgroundColor: 'brand.primary',
        color: 'text.inverse',
      },
      primary: {
        ...defaultChip,
        border: 'bordered',
      },
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
    spec: {
      color: 'text.secondary',
      fontFamily: 'monospace',
      fontSize: 'xs',
    },
  },
};

const defaultInputVariant = {
  height: 'height.input',
  border: 'bordered',
  borderRadius: 'm',
  outline: 'none',
  paddingLeft: 'm',
  paddingright: 'm',
  ':focus': {
    borderColor: 'brand.primary',
  },
  ':invalid': {
    borderColor: 'tones.error',
  },
  '::placeholder': {
    color: 'text.light',
  },
};

const defaultTextareaVariant = {
  ...defaultInputVariant,
  height: undefined,
  padding: 'm',
};

const variants = {
  button: {
    small: {
      ...global.button,
      fontSize: 'xs',
      paddingBottom: 'xxs',
      paddingLeft: 'xs',
      paddingRight: 'xs',
      paddingTop: 'xxs',
    },
  },
  form: {
    input: {
      default: defaultInputVariant,
    },
    label: {
      default: {
        color: 'text.secondary',
        fontSize: 's',
        fontWeight: 'bold',
        textTransform: 'uppercase',
      },
    },
    select: {
      default: defaultInputVariant,
    },
    textarea: {
      default: defaultTextareaVariant,
    },
  },
  layout: {
    container: {
      margin: '0 auto',
      maxWidth: 'width.container',
      paddingLeft: 'l',
      paddingRight: 'l',
      width: '100%',
    },
    fullWidth: {
      paddingLeft: 'l',
      paddingRight: 'l',
      width: '100%',
    },
  },
  nav: {
    list: {
      margin: 0,
      padding: 0,
    },
    item: {
      display: 'inline',
      fontSize: 'm',
      listStyleType: 'none',
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
