import {createStyles} from 'uinix-ui';

import 'github-markdown-css'; // eslint-disable-line import/no-unassigned-import

import typography from './typography.js';

const rules = {
  caret: {
    ':after': {
      borderBottom: '0 solid transparent',
      borderLeft: '4px solid transparent',
      borderRight: '4px solid transparent',
      borderTopStyle: 'solid',
      borderTopWidth: '4px',
      content: '""',
      display: 'inline-block',
      marginLeft: 's',
      height: 0,
      verticalAlign: 'middle',
      width: 0,
    },
  },
  hover: {
    ':hover': {
      backgroundColor: 'background.tertiary',
    },
  },
  truncate: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
};

const global = {
  '*': {
    boxSizing: 'border-box',
  },
  body: {
    backgroundColor: 'background.primary',
  },
  button: {
    border: 'bordered',
    borderRadius: 'm',
    boxShadow: 'button',
    cursor: 'pointer',
    fontSize: 'small',
    fontWeight: 'medium',
    minHeight: 'height.button',
  },
  'a:hover': {
    textDecoration: 'underline',
    opacity: 1,
  },
  hr: {
    borderBottom: 'bordered',
    borderTop: 'none',
    margin: 0,
    width: '100%',
  },
  ul: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
  },
};

const variants = {
  Button: {
    default: {
      color: 'text.primary',
      ':hover': {
        backgroundColor: 'hover.gray',
      },
    },
    primary: {
      color: 'white',
      backgroundColor: 'tone.success',
      ':hover': {
        backgroundColor: 'hover.success',
      },
    },
  },
};

const styles = createStyles({
  ...rules,
  global,
  typography,
  variants,
});

export default styles;
