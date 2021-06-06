import React from 'react';
import {Element} from 'uinix-ui';

import defaultImage from '../assets/images/liked-songs.png';

const Cover = ({alt, size, src = defaultImage}) => {
  const coverSize = `cover.${size}`;
  return (
    <Element
      as="img"
      alt={alt}
      boxShadow="l"
      src={src}
      h={coverSize}
      w={coverSize}
    />
  );
};

export default Cover;
