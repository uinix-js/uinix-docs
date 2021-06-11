import React from 'react';
import remark from 'remark';
import highlight from 'remark-highlight.js';
import remark2react from 'remark-react';
import slug from 'remark-slug';

import 'highlight.js/styles/github.css';

import BrandText from './brand-text.js';

// Wraps text nodes with <BrandText />.  Mutates the tree.
const brandify = (tree) => {
  (tree.props.children || []).forEach((child, i, array) => {
    if (typeof child === 'string') {
      array[i] = <BrandText key={i} text={child} />;
    } else if (child.key) {
      brandify(child);
    }
  });

  return tree;
};

const Markdown = ({content}) => {
  const {result} = remark()
    .use(highlight)
    .use(slug)
    .use(remark2react, {sanitize: false})
    .processSync(content);

  return brandify(result);
};

export default Markdown;
