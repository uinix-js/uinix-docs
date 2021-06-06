import {createStyles} from 'uinix-ui';

import typography from './typography.js';

const breakpoints = ['480px', '768px'];

const rules = {
  active: {
    backgroundColor: 'brand.active',
    boxShadow: 'box',
    color: 'brand.primaryInverse',
  },
  bordered: {
    border: 'bordered',
  },
  container: {
    width: 'width.container',
  },
  capitalize: {
    textTransform: 'capitalize',
  },
  disabled: {
    pointerEvents: 'none',
    opacity: 'disabled',
  },
  interactive: ({theme, onClick}) => ({
    cursor: onClick ? 'pointer' : undefined,
    ':active': {
      filter: onClick
        ? `drop-shadow(0 0 0.2rem ${theme.colors.brand.light})`
        : undefined,
    },
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
  'a:hover': {
    // TODO: https://github.com/robinweser/fela/issues/876
    opacity: 'interactive',
  },
  button: {
    backgroundColor: 'transparent',
    border: 'none',
    borderRadius: 'm',
    fontSize: 'm',
    paddingBottom: 's',
    paddingLeft: 'm',
    paddingRight: 'm',
    paddingTop: 's',
  },
  hr: {
    borderBottom: 'bordered',
    borderTop: 'none',
    margin: 0,
    width: '100%',
  },

  // Title tooltip
  '[title]': {
    position: 'relative',
  },
  '[title]:hover::before': {
    backgroundColor: 'black',
    bottom: '-l',
    borderRadius: 'm',
    color: 'white',
    content: 'attr(title)',
    fontFamily: 'body',
    fontSize: 's',
    paddingBottom: 'xs',
    paddingLeft: 's',
    paddingRight: 's',
    paddingTop: 'xs',
    position: 'absolute',
    right: '50%',
    transform: 'translateX(50%)',
    whiteSpace: 'nowrap',
    zIndex: 'forward',
  },

  // Vendor classname overrides
  '.hljs': {
    backgroundColor: 'brand.wash',
  },
};

const variants = {};

const styles = createStyles({
  ...rules,
  breakpoints,
  global,
  typography,
  variants,
});

export default styles;
