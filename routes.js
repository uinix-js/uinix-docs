import {TagType} from './tags.js';

export const RouteType = {
  Default: 'default',
  Document: 'document',
  Nav: 'nav',
  System: 'system',
  Systems: 'systems',
  Package: 'package',
  Packages: 'packages',
};

export const routes = [
  {
    name: 'Packages',
    description: 'Packages in the uinix-js ecosystem.',
    type: RouteType.Packages,
    children: [],
  },
  {
    name: 'Demos',
    description: 'UI Demos built with uinix-js.',
    type: RouteType.Nav,
    children: [
      {
        name: 'Systems',
        description:
          'The following UI systems are reverse-engineered and built rapidly with uinix-ui using only four component primitives (`Element`, `Layout`, `Icon`, `Text`) and a minimal set of UI specs (`theme`, `icons`, `styles`).',
        type: RouteType.Systems,
        children: [
          {
            name: 'uinix',
            type: RouteType.System,
          },
          {
            name: 'Apple',
            type: RouteType.System,
          },
          {
            name: 'Discord',
            type: RouteType.System,
          },
          {
            name: 'Github',
            type: RouteType.System,
          },
          {
            name: 'Google',
            type: RouteType.System,
          },
          {
            name: 'Spotify',
            type: RouteType.System,
          },
        ],
      },
    ],
  },
  {
    name: 'Learn',
    description:
      'Guides, tutorials, and writings on building UIs easily with uinix-js.',
    type: RouteType.Nav,
    children: [
      {
        name: 'UI Systems and Complexity',
        description:
          'Exploring complexity in building and maintaining UI systems.',
        tags: [TagType.Whitepaper, TagType.UinixUi],
        type: RouteType.Document,
      },
    ],
  },
];
