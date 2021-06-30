import React, {createElement as h, useState} from 'react';
import {Layout, Text, load} from 'uinix-ui';

import {BrandLink, SystemKnowledge} from '../../../system/components/index.js';
import defaultSystem from '../../../system/index.js';
import defaultConfig from '../../../system/config.js';
import apple from '../apple/index.js';
import discord from '../discord/index.js';
import github from '../github/index.js';
import google from '../google/index.js';
import spotify from '../spotify/index.js';

const systems = {
  apple,
  discord,
  github,
  google,
  spotify,
};

const UinixUi = () => <BrandLink to="/packages/uinix-ui" text="uinix-ui" />;

const Demo = () => {
  const [system, setSystem] = useState(null);
  const [error, setError] = useState(null);

  const handleSelectSystem = (event) => {
    const selectedSystem = systems[event.target.value];

    // Merge and load just the icons
    const mergedSystem = {
      ...defaultSystem,
      icons: selectedSystem.icons,
    };
    load(h, mergedSystem, defaultConfig);

    setSystem(selectedSystem);
  };

  const handleUploadSystem = async (event) => {
    setError(null);
    setSystem(null);
    try {
      const text = await event.target.files[0].text();
      setSystem(JSON.parse(text));
    } catch (error) {
      setError(error);
    }
  };

  return (
    <Layout direction="column" p="m" spacing="l">
      <p>
        This entire site is built with the <UinixUi /> UI system. A UI system
        that builds a system to preview other UI systems. How fun! 🤗
      </p>
      <p>
        In addition to supporting rapid UI development, <UinixUi /> allows easy
        definition, management and access of system knowledge. Use the following
        controls to preview an example system or upload a valid{' '}
        <code>system.json</code> file.
      </p>
      <Layout align="center" spacing="m">
        <select value={system} onChange={handleSelectSystem}>
          <option value={null}>Select a system</option>
          {Object.keys(systems).map((key) => (
            <option key={key} value={key}>
              {systems[key].meta.name}
            </option>
          ))}
        </select>
        <div>or</div>
        <input type="file" onChange={handleUploadSystem} />
      </Layout>
      {system && <SystemKnowledge system={system} />}
      <p>
        {error && (
          <Text color="text.tones.error">
            Unable to parse system. Please ensure that a valid system is
            provided. Refer to the <UinixUi /> documentation for details.
          </Text>
        )}
      </p>
    </Layout>
  );
};

export default Demo;
