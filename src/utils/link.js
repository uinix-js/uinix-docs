const createLink =
  (prefix) =>
  (x = '') =>
    `${prefix}/${x}`;

export const getGithubRepoLink = createLink('https://github.com/uinix-js');

export const getLearnLink = createLink('/learn');

export const getPackageLink = createLink('/packages');
