import {useEffect, useState} from 'react';

export const ReadyStateType = {
  Init: 0,
  Pending: 1,
  Ready: 2,
};

const ms = 100;

let cachedReadyState = ReadyStateType.Init;

// TODO: hacky way to workaround FOUC in fela
export const useReadyState = () => {
  const [readyState, setReadyState] = useState(cachedReadyState);

  useEffect(() => {
    let interval = null;

    const cleanup = () => {
      if (interval) {
        clearInterval(interval);
      }
    };

    const updateReadyState = () => {
      if (typeof document !== 'undefined') {
        if (document.querySelector('style[data-fela-type="STATIC"]')) {
          cachedReadyState = ReadyStateType.Ready;
          cleanup();
        } else {
          cachedReadyState = ReadyStateType.Pending;
        }

        setReadyState(cachedReadyState);
      }
    };

    interval = setInterval(updateReadyState, ms);

    return cleanup;
  }, []);

  return readyState;
};
