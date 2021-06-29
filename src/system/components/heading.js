import React from 'react';
import {Icon, Text} from 'uinix-ui';

import {slugify} from '../../utils/index.js';

const Heading = ({as, text}) => {
  const slug = slugify(text);
  return (
    <Text as={as} id={slug} position="relative">
      <a aria-label={`${text} permalink`} className="anchor" href={`#${slug}`}>
        <Icon icon="anchor" />
      </a>
      {text}
    </Text>
  );
};

export default Heading;
