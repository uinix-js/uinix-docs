import React from 'react';
import {Element, Text} from 'uinix-ui';

import Bar from '../bar.js';
import Dot from '../dot.js';

export const wrapStyle = (key) => (children) => (value) => {
  return <Element styles={{[key]: value}}>{children}</Element>;
};

export const bar = (value) => {
  return <Bar w={value} />;
};

export const box = (key) => (value) => {
  const style = {
    border: 'bordered',
    [key]: value,
  };
  return <Element my="s" px="l" py="m" styles={style} />;
};

export const dot = (value) => {
  return <Dot isBordered color={value} size="icon.m" />;
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

export const nothing = () => null;
