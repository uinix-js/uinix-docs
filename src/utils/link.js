const createLink =
  (prefix) =>
  (x = '') =>
    `${prefix}/${x}`;

export const getGithubRepoLink = createLink('https://github.com/uinix-js');
