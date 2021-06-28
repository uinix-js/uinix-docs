import {createElement as h, useEffect, useState} from 'react';
import {load} from 'uinix-ui';

import config from '../system/config.js';
import system from '../system/index.js';

load(h, system, config);

let defaultIsLoaded = false;
const ms = 100;

// TODO: hacky way to workaround FOUC in fela
export const useLoadSystem = () => {
  const [isLoaded, setIsLoaded] = useState(defaultIsLoaded);

  useEffect(() => {
    let interval = null;

    const cleanup = () => {
      if (interval) {
        clearInterval(interval);
      }
    };

    const verifyLoad = () => {
      if (
        typeof document !== 'undefined' &&
        document.querySelector('style[data-fela-type]')
      ) {
        setIsLoaded(true);
        defaultIsLoaded = true;
        cleanup();
      }
    };

    interval = setInterval(verifyLoad, ms);

    return cleanup;
  }, []);

  return isLoaded;
};
