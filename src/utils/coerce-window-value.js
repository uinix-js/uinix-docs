// https://www.gatsbyjs.com/docs/debugging-html-builds/
export const coerceWindowValue = (path, defaultValue) => {
  if (typeof window === 'undefined') {
    return defaultValue;
  }

  return path.split('.').reduce((acc, i) => acc[i], window);
};
