import React from 'react';
import {Element} from 'uinix-ui';

const styles = {
  display: ['none', 'none', 'unset'],
};

const ResponsiveShow = ({children}) => {
  return <Element styles={styles}>{children}</Element>;
};

export default ResponsiveShow;
