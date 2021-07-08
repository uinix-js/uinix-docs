import React from 'react';
import {Text} from 'uinix-ui';

import {createFootnoteId} from '../util.js';

const Footnote = ({footnote}) => (
  <Text as="a" href={`#${createFootnoteId(footnote)}`} variant="footnoteLink">
    <sup>{footnote}</sup>
  </Text>
);

export default Footnote;
