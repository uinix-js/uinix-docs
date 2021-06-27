import {useEffect, useState} from 'react';

let defaultIsReady = false;

const ms = 100;

// TODO: hacky way to workaround FOUC in fela
const ready = () => {
  if (typeof document !== 'undefined') {
    return document.querySelector('style[data-fela-type]');
  }
};

export const useIsReady = () => {
  const [isReady, setIsReady] = useState(defaultIsReady);

  useEffect(() => {
    let interval = null;

    const cleanup = () => {
      if (interval) {
        clearInterval(interval);
      }
    };

    const readyCheck = () => {
      if (ready()) {
        setIsReady(true);
        defaultIsReady = true;
        cleanup();
      }
    };

    interval = setInterval(readyCheck, ms);

    return cleanup;
  }, []);

  return isReady;
};
