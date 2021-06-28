import {createStyles} from 'uinix-ui';

import typography from './typography.js';

const rules = {};

const global = {
  'a:hover': {
    textDecoration: 'underline',
  },
  button: {
    backgroundColor: 'interaction.button',
    border: 'none',
    borderRadius: 'pill',
    color: 'text.inverse',
    cursor: 'pointer',
    fontSize: 'body',
    fontWeight: 'body',
    paddingBottom: 'x2',
    paddingLeft: 'x4',
    paddingRight: 'x4',
    paddingTop: 'x2',
    width: 'min-content',
    ':hover': {
      backgroundColor: 'interaction.buttonHover',
    },
  },
  hr: {
    borderBottom: 'none',
    borderTop: 'dark',
  },
  select: {
    border: 'bordered',
    borderRadius: 'm',
    fontSize: 'subtitle',
    fontWeight: 'bold',
    letterSpacing: 'subtitle',
    lineHeight: 'subtitle',
    paddingBottom: 'x3',
    paddingLeft: 'x4',
    paddingRight: 'x4',
    paddingTop: 'x3',
  },
  'select:hover': {
    border: 'dark',
  },
  ul: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
  },
  ol: {
    margin: 0,
    padding: 0,
  },
  'ol li': {
    listStylePosition: 'inside',
  },
};

const variants = {};

const styles = createStyles({
  ...rules,
  global,
  typography,
  variants,
});

export default styles;
