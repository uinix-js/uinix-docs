import React, {useEffect, useReducer, useRef} from 'react';

import PageLayout from '../layouts/page-layout.js';
import {slugify} from '../utils/slugify.js';

const Package = ({pageContext}) => {
  const [_, forceUpdate] = useReducer((x) => x + 1, 0);
  const readmeRef = useRef();

  const Readme = readmeRef.current;
  const name = slugify(pageContext.name);

  // TODO: refactor and share code with system template in async-template.js
  useEffect(() => {
    const load = async () => {
      const {default: readme} = await import(`uinix-ui/readme.md`);
      readmeRef.current = readme;
      forceUpdate();
    };

    load();
  }, [name]);

  if (!Readme) {
    return null;
  }

  return (
    <PageLayout>
      <Readme />
    </PageLayout>
  );
};

export default Package;
