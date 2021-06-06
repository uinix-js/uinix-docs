import React from 'react';

import NavPageLayout from '../../../layouts/nav-page-layout.js';
import {BrandText} from '../../../system/components/index.js';

const description = (
  <>
    The following UI systems are reverse-engineered and built rapidly with{' '}
    <BrandText text="uinix-ui" /> using only four component primitives (
    <code>Element</code>, <code>Layout</code>, <code>Icon</code>,{' '}
    <code>Text</code>) and a minimal set of UI specs (<code>theme</code>,{' '}
    <code>icons</code>, <code>styles</code>).
  </>
);

const links = [
  {
    label: 'uinix',
    to: 'uinix',
  },
  {
    label: 'Apple',
    to: 'apple',
  },
  {
    label: 'Discord',
    to: 'discord',
  },
  {
    label: 'Github',
    to: 'github',
  },
  {
    label: 'Google',
    to: 'google',
  },
  {
    label: 'Spotify',
    to: 'spotify',
  },
];

const Page = () => {
  return <NavPageLayout description={description} links={links} />;
};

export default Page;
