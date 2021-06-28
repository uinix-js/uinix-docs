import React from 'react';
import {Element} from 'uinix-ui';

const Button = ({disabled, text, onClick}) => {
  return (
    <Element
      as="button"
      disabled={disabled}
      flex="none"
      w="max-content"
      onClick={onClick}
    >
      {text}
    </Element>
  );
};

export default Button;
