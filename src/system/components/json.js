import React from 'react';

import Copyable from './copyable.js';
import Markdown from './markdown.js';

const Json = ({value}) => {
  const text = JSON.stringify(value, null, 2);
  const content = '```json\n' + text + '\n```';
  return (
    <Copyable text={text}>
      <Markdown content={content} />
    </Copyable>
  );
};

export default Json;
