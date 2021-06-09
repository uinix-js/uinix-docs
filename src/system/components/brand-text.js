import React from 'react';
import {Text} from 'uinix-ui';

const StateType = {
  None: 0,
  One: 1,
  Two: 2,
  Three: 3,
};

const textColors = {
  [StateType.One]: 'brand.primary',
  [StateType.Two]: 'brand.secondary',
  [StateType.Three]: 'brand.light',
};

const BrandText = ({text = ''}) => {
  const parts = text.split(/(ui)(nix)(-?[\w-]*)/);
  if (parts.length === 1) {
    return text;
  }

  const first = parts[0];
  const last = parts[parts.length - 1];
  const matches = parts.slice(1, -1);

  let state = StateType.None;
  const brandTexts = matches.map((match, i) => {
    state++;
    if (state > StateType.Three) {
      state = StateType.None;
    }

    return (
      <Text key={i} color={textColors[state]}>
        {match}
      </Text>
    );
  });

  return (
    <>
      {first}
      {brandTexts}
      {last}
    </>
  );
};

export default BrandText;
