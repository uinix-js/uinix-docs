import {useEffect, useState} from 'react';

// TODO: hacky way to workaround FOUC in fela
export const useReady = ({predicate, ms = 100}) => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let interval;

    const cleanup = () => {
      if (interval) {
        clearInterval(interval);
      }
    };

    const check = () => {
      if (predicate()) {
        setReady(true);
        cleanup();
      }
    };

    interval = setInterval(check, ms);

    return cleanup;
  }, [ms, predicate]);

  return ready;
};
