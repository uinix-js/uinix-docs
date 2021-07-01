import React, {createElement as h, useState} from 'react';
import {Layout, Text, load, merge} from 'uinix-ui';

import {BrandLink, SystemKnowledge} from '../../../system/components/index.js';
import config from '../../../system/config.js';
import apple from '../apple/system.js';
import discord from '../discord/system.js';
import github from '../github/system.js';
import google from '../google/system.js';
import spotify from '../spotify/system.js';
import uinix from '../uinix/system.js';

const systems = {
  apple,
  discord,
  github,
  google,
  spotify,
  uinix,
};

const UinixUi = () => <BrandLink to="/packages/uinix-ui" text="uinix-ui" />;

const Demo = () => {
  const [system, setSystem] = useState('');
  const [error, setError] = useState(null);

  const handleSelectSystem = (event) => {
    const selectedSystem = systems[event.target.value];

    // Merge only the icons (retain the current system for demo styling needs)
    const mergedSystem = {
      ...uinix,
      icons: merge(uinix.icons)(selectedSystem.icons),
    };
    load(h, mergedSystem, config);

    setSystem(selectedSystem);
  };

  const handleUploadSystem = async (event) => {
    setError(null);
    setSystem('');
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
          <option value="">Select a system</option>
          {Object.keys(systems).map((key) => (
            <option key={key} value={key}>
              {key}
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
