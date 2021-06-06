export const readmeFile = {
  name: 'readme.md',
  contents: 'stuff',
};

export const repo = {
  name: 'uinix-ui',
  description: 'Minimal primitives to build and compose rich UIs',
  url: 'https://github.com/uinix-js/uinix-ui',
  user: 'uinix-js',
  forks: 42,
  stars: 42,
  watchers: 42,
  tags: ['unix', 'ui', 'theme', 'components', 'design-system'],
  license: 'MIT',
  languages: [{name: 'Javascript', percentage: 100}],
};

export const commitSummary = {
  total: 28,
  latest: {
    at: 'yesterday',
    hash: '1d232b3',
    isVerified: true,
    message: 'feat(Text): support variant prop',
    user: {
      name: 'chrisrzhou',
    },
  },
};

export const files = [
  {
    type: 'directory',
    name: '.github/workflows',
    commitMessage: 'build: fix github workflow',
    at: '15 days ago',
  },
  {
    type: 'directory',
    name: 'cypress',
    commitMessage: 'deps: update dev deps',
    at: '2 days ago',
  },
  {
    type: 'directory',
    name: 'lib',
    commitMessage: 'fix(Text): set default `as` prop to `span`',
    at: 'yesterday',
  },
  {
    type: 'directory',
    name: 'test',
    commitMessage: 'test(Text): test variants',
    at: '2 days ago',
  },
  {
    type: 'file',
    name: '.editorconfig',
    commitMessage: 'bootstrap',
    at: '16 days ago',
  },
  {
    type: 'file',
    name: '.gitignore',
    commitMessage: 'bootstrap',
    at: '16 days ago',
  },
  {
    type: 'file',
    name: '.cypress.json',
    commitMessage: 'bootstrap',
    at: '16 days ago',
  },
  {
    type: 'file',
    name: 'index.d.ts',
    commitMessage: 'bootstrap',
    at: '16 days ago',
  },
  {
    type: 'file',
    name: 'index.js',
    commitMessage: 'feat(typography): support typography',
    at: '2 days ago',
  },
  {
    type: 'file',
    name: 'license',
    commitMessage: 'bootstrap',
    at: '16 days ago',
  },
  {
    type: 'file',
    name: 'package.json',
    commitMessage: 'deps: update dev deps',
    at: 'yesterday',
  },
  {
    type: 'file',
    name: 'readme.md',
    commitMessage: 'docs: update readme',
    at: 'yesterday',
  },
];
