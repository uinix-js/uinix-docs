import {slugify} from './slugify.js';

export const coerceLinks = (links, options = {}) =>
  links.map((link) => {
    if (typeof link === 'string') {
      return {
        text: link,
        to: `${options.hasLeadingSlash ? '/' : ''}${slugify(link)}`,
      };
    }

    return link;
  });
