import _slugify from 'slugify';

export const slugify = (x) => _slugify(x, {lower: true});
