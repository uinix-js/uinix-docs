import {createStyles} from 'uinix-ui';

import typography from './typography.js';

const rules = {
  flexFit: {
    minWidth: 0,
    width: '100%',
  },
  hover: {
    ':hover': {
      backgroundColor: 'background.modifier.hover',
    },
  },
  interactive: ({onClick}) => ({
    cursor: onClick ? 'pointer' : undefined,
    ':hover': {
      color: onClick ? 'interactive.hover' : undefined,
    },
  }),
  scrollable: ({scrollbarWidth = 'thin'}) => ({
    height: 'height.viewport',
    overflowX: 'hidden',
    overflowY: 'auto',
    scrollbarWidth,
  }),
  stickyTop: {
    backgroundColor: 'inherit',
    position: 'sticky',
    top: 0,
    zIndex: 'forward',
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
    backgroundColor: 'background.tertiary',
  },
  button: {
    backgroundColor: 'brand.blurple',
    borderRadius: 's',
    color: 'text.normal',
    fontSize: 'body',
    fontWeight: 'medium',
    lineHeight: 'l',
    paddingBottom: 's',
    paddingLeft: 'm',
    paddingRight: 'm',
    paddingTop: 's',
    transition: 'color.default',
    ':hover': {
      backgroundColor: 'background.primaryHovered',
    },
  },
  'a:hover': {
    textDecoration: 'underline',
  },
  hr: {
    borderColor: 'background.modifier.accent',
    borderWidth: 'm',
  },
  summary: {
    fontSize: 'title',
  },
  ul: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
  },
  // Title tooltip
  '[title]:hover::before': {
    display: 'none',
  },
};

const variants = {
  Button: {
    primary: global.button,
    secondary: {
      ...global.button,
      backgroundColor: 'background.primary',
      color: 'interactive.active',
      lineHeight: 'm',
      ':hover': {
        backgroundColor: 'background.secondary',
      },
    },
  },
  Input: {
    search: {
      backgroundColor: 'background.tertiary',
      border: 'none',
      color: 'text.normal',
      fontFamily: 'body',
      fontSize: 'm',
      outline: 'none',
      width: '100%',
    },
    channelTextArea: {
      backgroundColor: 'transparent',
      border: 'none',
      color: 'text.normal',
      fontFamily: 'body',
      fontSize: 'l',
      outline: 'none',
      width: '100%',
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
