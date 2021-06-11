import React from 'react';
import {Text} from 'uinix-ui';

const MatchIndex = {
  Start: 0,
  Ui: 1,
  Nix: 2,
  End: 3,
};

const colors = {
  [MatchIndex.Ui]: 'brand.primary',
  [MatchIndex.Nix]: 'brand.secondary',
  [MatchIndex.End]: 'brand.light',
};

const BrandText = ({text = ''}) => {
  const substrings = text.split(/(ui)(nix)(-?[\w-]*)/);
  if (substrings.length === 1) {
    return text;
  }

  const first = substrings[0];
  const last = substrings[substrings.length - 1];
  const matches = substrings.slice(1, -1);

  let matchIndex = MatchIndex.Start;
  const brandTexts = matches.map((match, i) => {
    matchIndex++;
    if (matchIndex > MatchIndex.End) {
      matchIndex = MatchIndex.Start;
    }

    return (
      <Text key={i} color={colors[matchIndex]}>
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
