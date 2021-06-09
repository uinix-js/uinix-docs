import React from 'react';
import remark from 'remark';
import highlight from 'remark-highlight.js';
import remark2react from 'remark-react';

import 'highlight.js/styles/github.css';

import BrandText from './brand-text.js';

const sanitize = {
  attributes: {
    '*': ['className'],
  },
};

// Wraps text nodes with <BrandText />.  Mutates the tree.
const brandify = (tree) => {
  if (tree.props.children) {
    tree.props.children.forEach((child, i, array) => {
      if (typeof child === 'string') {
        array[i] = <BrandText key={i} text={child} />;
      } else if (child.key) {
        brandify(child);
      }
    });
  }

  return tree;
};

const Markdown = ({content}) => {
  const {result} = remark()
    .use(highlight)
    .use(remark2react, {sanitize})
    .processSync(content);
  return brandify(result);
};

export default Markdown;
