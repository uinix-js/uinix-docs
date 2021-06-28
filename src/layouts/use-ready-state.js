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

    if (cachedReadyState !== ReadyStateType.Ready) {
      setReadyState(ReadyStateType.Pending);
    }

    const updateReadyState = () => {
      if (
        typeof document !== 'undefined' &&
        document.querySelector('style[data-fela-type="STATIC"]')
      ) {
        cachedReadyState = ReadyStateType.Ready;
        setReadyState(ReadyStateType.Ready);
        cleanup();
      }
    };

    interval = setInterval(updateReadyState, ms);

    return cleanup;
  }, []);

  return readyState;
};
