import {useEffect, useState} from 'react';
import {navigate} from 'gatsby';

// Hack around gatsby/fela FOUC
export const useIsReady = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    navigate(window.location.pathname, {replace: true});
    setIsReady(true);
  }, []);

  return isReady;
};
