import htmlTags from 'html-tags';
import voidHtmlTags from 'html-tags/void.js';
import React from 'react';
import {Element, Text} from 'uinix-ui';

import Bar from '../bar.js';
import Box from '../box.js';
import Dot from '../dot.js';
import Json from '../json.js';

const blacklistedHtmlTags = new Set([
  'html',
  'head',
  'style',
  'link',
  'body',
  'script',
]);

export const bar = () => (value) => {
  return <Bar w={value} />;
};

export const box = (key) => (value) => {
  return <Box styles={{[key]: value}} />;
};

export const dot = (key, color) => (value) => {
  return (
    <Element styles={{[key]: value}}>
      <Dot isBordered color={color || value} size="icon.m" />
    </Element>
  );
};

export const json = () => (value) => {
  return <Json value={value} />;
};

export const styled = (enableAs) => (value, name) => {
  let as;
  let children;
  if (enableAs) {
    if (htmlTags.includes(name) && !blacklistedHtmlTags.has(name)) {
      as = name;
    }

    if (!voidHtmlTags.includes(name)) {
      children = name;
    }
  } else {
    children = name;
  }

  return (
    <Box>
      <Element as={as} styles={value}>
        {children}
      </Element>
    </Box>
  );
};

export const text =
  (key, lines = 1) =>
  (value) => {
    const style = {
      whiteSpace: 'pre',
      ...{[key]: value},
    };
    return (
      <Text styles={style}>
        {Array.from({length: lines})
          .map(() => 'The quick brown fox jumps over the lazy dog')
          .join('\n')}
      </Text>
    );
  };

export const nothing = () => (_value) => null;
