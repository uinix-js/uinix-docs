import {useEffect, useState} from 'react';

// TODO: hacky way to workaround FOUC in fela
export const useIsReady = ({ms = 100, ready}) => {
  const [isReady, setIsReady] = useState(ready());

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
        cleanup();
      }
    };

    interval = setInterval(readyCheck, ms);

    return cleanup;
  }, [ms, ready]);

  return isReady;
};
