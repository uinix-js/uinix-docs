import React from 'react';
import remark from 'remark';
import remark2react from 'remark-react';

import BrandText from './brand-text.js';

// Wraps text nodes with <BrandText />.  Mutates the tree.
const brandify = (tree) => {
  tree.props.children.forEach((child, i, array) => {
    if (typeof child === 'string') {
      array[i] = <BrandText key={i} text={child} />;
    } else if (child.key) {
      brandify(child);
    }
  });
  return tree;
};

const Markdown = ({content}) => {
  const {result} = remark().use(remark2react).processSync(content);
  return brandify(result);
};

export default Markdown;
