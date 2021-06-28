import {createStyles} from 'uinix-ui';

import typography from './typography.js';

const rules = {
  selectedTab: ({isSelected}) => ({
    color: isSelected ? 'brand.primary' : undefined,
    borderBottom: 'tab',
    borderColor: isSelected ? 'tab' : 'transparent',
  }),
  selfCentered: {
    alignSelf: 'center',
    justifySelf: 'center',
  },
};

const global = {
  '*': {
    boxSizing: 'border-box',
  },
  button: typography.variants.button,
  hover: {
    ':hover': {
      backgroundColor: 'background.light',
    },
  },
  input: {
    ...typography.variants.input,
    border: 'none',
    height: 'height.input',
    outline: 'none',
  },
  '[title]': {
    position: 'relative',
  },
  '[title]:hover::before': {
    backgroundColor: 'black',
    bottom: '-x8',
    borderRadius: 'm',
    color: 'white',
    content: 'attr(title)',
    fontSize: 's',
    paddingBottom: 'x1',
    paddingLeft: 'x2',
    paddingRight: 'x2',
    paddingTop: 'x1',
    position: 'absolute',
    right: '50%',
    transform: 'translateX(50%)',
    whiteSpace: 'nowrap',
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
