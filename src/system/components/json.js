import React from 'react';

import Markdown from './markdown.js';

const Json = ({value}) => {
  const content = '```json\n' + JSON.stringify(value, null, 2) + '\n```';
  return <Markdown content={content} />;
};

export default Json;
