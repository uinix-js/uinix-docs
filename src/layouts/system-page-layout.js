import React, {createElement as h, useEffect, useState} from 'react';
import {Element, Layout, Text, load, merge} from 'uinix-ui';

import defaultConfig from '../system/config.js';
import defaultSystem from '../system/index.js';
import {
  Button,
  LoadingPage,
  SystemKnowledge,
  Window,
} from '../system/components/index.js';
import PageLayout from './page-layout.js';

const views = {
  Demo: 'Demo',
  Snapshot: 'Snapshot',
  SystemKnowledge: 'System Knowledge',
};

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
  const [selectedView, setSelectedView] = useState(views.Demo);

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

  const handleSelectView = (view) => () => setSelectedView(view);

  const {Demo, referenceDate, snapshot, url} = system.meta;

  let Content;
  switch (selectedView) {
    case views.Demo:
      Content = <Demo />;
      break;
    case views.Snapshot:
      Content = (
        <Layout align="center" direction="column" p="m" spacing="m">
          <Text as="description">
            {snapshot ? (
              <>
                The following snapshot image was{' '}
                <Element as="a" href={url}>
                  referenced
                </Element>{' '}
                on {referenceDate}.
              </>
            ) : (
              'This system does not have a snapshot image.'
            )}
          </Text>
          {snapshot && <Element as="img" src={snapshot} w="100%" />}
        </Layout>
      );
      break;
    case views.SystemKnowledge:
      Content = <SystemKnowledge system={system} />;
      break;
    default:
      break;
  }

  return (
    <PageLayout isFullWidth>
      <Layout direction="column" mt="l" spacing="l">
        <Layout align="center" spacing="m">
          {Object.values(views).map((view) => (
            <Button
              key={view}
              disabled={selectedView === view}
              text={view}
              onClick={handleSelectView(view)}
            />
          ))}
        </Layout>
        <Window>{Content}</Window>
      </Layout>
    </PageLayout>
  );
};

export default SystemPageLayout;
