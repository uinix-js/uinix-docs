import React, {useEffect, useReducer, useRef} from 'react';
import {SystemProvider} from 'uinix-ui';

import PageLayout from '../layouts/page-layout.js';
import {Window} from '../system/components/index.js';
import {slugify} from '../utils/slugify.js';

const SystemTemplate = ({pageContext}) => {
  const [_, forceUpdate] = useReducer((x) => x + 1, 0);
  const systemRef = useRef();

  const system = systemRef.current;
  const systemName = slugify(pageContext.name);

  // TODO: research async module loading, and resetting/cleanup fela global CSS when unmounting component
  useEffect(() => {
    const loadSystem = async () => {
      const {default: system} = await import(
        `../demos/systems/${systemName}/index.js`
      );
      systemRef.current = system;
      forceUpdate();
    };

    loadSystem();
  }, [systemName]);

  if (!system) {
    return null;
  }

  const {Demo} = system;

  return (
    <PageLayout>
      <SystemProvider system={system}>
        <Window>
          <Demo />
        </Window>
      </SystemProvider>
    </PageLayout>
  );
};

export default SystemTemplate;
