import React, {createElement as h, useEffect, useState} from 'react';
import {load, merge} from 'uinix-ui';

import defaultConfig from '../system/config.js';
import defaultSystem from '../system/index.js';
import {LoadingPage, Window} from '../system/components/index.js';
import PageLayout from './page-layout.js';

/**
 * Uinix-ui system is meant to be immutable when loaded.
 *
 * This page merges the default system with the loaded system and keeps
 * a few default system configuration to ensure the site's UI integrity.
 *
 * This page is refreshed when unmounted to cleanly reset and load the default
 * system when navigating out of the page.
 **/
const SystemPageLayout = ({name}) => {
  const [system, setSystem] = useState();

  useEffect(() => {
    const loadSystem = async () => {
      const {default: loadedSystem} = await import(
        `../demos/systems/${name}/index.js`
      );

      const mergedSystem = merge(defaultSystem)(loadedSystem);
      mergedSystem.styles.breakpoints = defaultSystem.styles.breakpoints;

      load(h, mergedSystem, defaultConfig);
      setSystem(loadedSystem);
    };

    loadSystem();

    return () => window.location.reload();
  }, [name]);

  if (!system) {
    return <LoadingPage />;
  }

  const {Demo} = system.meta;

  return (
    <PageLayout>
      <Window>
        <Demo />
      </Window>
    </PageLayout>
  );
};

export default SystemPageLayout;
