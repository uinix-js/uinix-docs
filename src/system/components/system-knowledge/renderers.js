import React from 'react';
import {Element, Text} from 'uinix-ui';

import Bar from '../bar.js';
import Box from '../box.js';
import Dot from '../dot.js';
import Json from '../json.js';

export const bar = () => (value) => <Bar w={value} />;

export const box = (key) => (value) => <Box styles={{[key]: value}} />;

export const dot = (key, color) => (value) =>
  (
    <Element styles={{[key]: value}}>
      <Dot isBordered color={color || value} size="icon.m" />
    </Element>
  );

export const json = () => (value) => <Json value={value} />;

export const styled = () => (value, name) =>
  (
    <Box>
      <Element styles={value}>{name}</Element>
    </Box>
  );

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
