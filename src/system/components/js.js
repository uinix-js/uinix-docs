import React from 'react';

import Markdown from './markdown.js';

const Js = ({value}) => {
  const content = '```js\n' + value.toString() + '\n```';
  return <Markdown content={content} />;
};

export default Js;
