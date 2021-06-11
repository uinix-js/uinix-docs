const BASE_URL = 'https://github.com/uinix-js';

export const getRepoLink = (subpath = '') => {
  return [BASE_URL, subpath].join('/');
};
