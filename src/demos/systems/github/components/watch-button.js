import React, {useState} from 'react';
import {noop} from 'uinix-fp';

import Button from './button.js';

const WatchButton = ({count: initialCount}) => {
  const [isWatching, setIsWatching] = useState(false);
  const [count, setCount] = useState(initialCount);

  const text = isWatching ? 'Unwatch' : 'Watch';

  return (
    <Button
      icon="eye"
      count={count}
      text={text}
      onClick={() => {
        setIsWatching(!isWatching);
        setCount(isWatching ? count - 1 : count + 1);
      }}
      onExpand={noop}
    />
  );
};

export default WatchButton;
