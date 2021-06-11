import React, {useEffect, useState} from 'react';
import {SystemProvider, merge} from 'uinix-ui';

import defaultSystem from '../system/index.js';
import {LoadingPage, Window} from '../system/components/index.js';
import PageLayout from './page-layout.js';

const SystemPageLayout = ({name}) => {
  const [system, setSystem] = useState();

  useEffect(() => {
    const loadSystem = async () => {
      const {default: loadedSystem} = await import(
        `../demos/systems/${name}/index.js`
      );
      setSystem(loadedSystem);
    };

    loadSystem();
  }, [name]);

  if (!system) {
    return <LoadingPage />;
  }

  const {Demo} = system;

  return (
    <PageLayout>
      <SystemProvider system={merge(defaultSystem)(system)}>
        <Window>
          <Demo />
        </Window>
      </SystemProvider>
    </PageLayout>
  );
};

export default SystemPageLayout;
