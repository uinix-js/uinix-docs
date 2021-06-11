import React from 'react';
import {Icon} from 'uinix-ui';

import {useScrollTop} from '../hooks/use-scroll-top.js';

const ScrollTop = () => {
  const [canScrollTop, scrollTop] = useScrollTop();

  if (!canScrollTop) {
    return null;
  }

  return (
    <Icon
      color="icon.default"
      icon="up"
      position="fixed"
      right="m"
      size="icon.l"
      title="Back to top"
      top="m"
      onClick={scrollTop}
    />
  );
};

export default ScrollTop;
