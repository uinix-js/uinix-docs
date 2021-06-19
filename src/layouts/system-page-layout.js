import React, {useEffect, useState} from 'react';
import {load, merge} from 'uinix-ui';

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
      load(React.createElement, merge(defaultSystem)(loadedSystem));
    };

    loadSystem();
  }, [name]);

  if (!system) {
    return <LoadingPage />;
  }

  const {Demo} = system;

  return (
    <PageLayout>
      <Window>
        <Demo />
      </Window>
    </PageLayout>
  );
};

export default SystemPageLayout;
