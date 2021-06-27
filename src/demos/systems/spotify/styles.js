import {createStyles} from 'uinix-ui';

import typography from './typography.js';

const rules = {
  footerSection: {
    minWidth: 'width.footerSection',
    width: '30%',
  },
  iconBackground: ({hasAccent}) => ({
    backgroundColor: hasAccent ? 'brand.primary' : 'brand.white',
    borderRadius: 'round',
    boxShadow: 'm',
    color: hasAccent ? 'brand.white' : 'brand.black',
    padding: 's',
    transition: 'cubicBezier',
    ':hover': {
      transform: 'iconScale',
    },
  }),
  iconBadge: {
    ':after': {
      backgroundColor: 'currentColor',
      borderRadius: 'round',
      bottom: '-50%',
      content: '""',
      display: 'block',
      height: 'badge',
      left: '50%',
      position: 'absolute',
      transform: 'translateXHalf',
      width: 'badge',
    },
  },
};

const global = {
  '*': {
    boxSizing: 'border-box',
  },
  body: {
    backgroundColor: 'background.gray4',
    ...typography.body,
  },
  button: {
    backgroundColor: 'brand.primary',
    borderRadius: 'pill',
    fontSize: 'l',
    fontWeight: 'bold',
    color: 'text.primary',
    paddingBottom: 's',
    paddingLeft: 'l',
    paddingRight: 'l',
    paddingTop: 's',
    transition: 'default',
  },
  'button:hover': {
    backgroundColor: 'hover.primary',
  },
  'a:hover': {
    opacity: 'visible',
    cursor: 'pointer',
  },
  '[title]:hover::before': {
    content: 'none',
  },
  ul: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
  },
};

const variants = {
  Icon: {
    interactive: ({color, isActive}) => ({
      color: isActive ? 'brand.primary' : color || 'icon.default',
      ':hover': {
        color: isActive ? 'brand.primary' : color || 'icon.active',
        backgroundColor: 'transparent',
      },
    }),
  },
};

const styles = createStyles({
  ...rules,
  global,
  typography,
  variants,
});

export default styles;
