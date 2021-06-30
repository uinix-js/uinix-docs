import {isPlainObject} from 'uinix-fp';

/**
 * This is a naive test to determine if a provided value terminates to a spec value or a recursive spec definitions.
 *
 * - The first check is to determine if the value is a plain object.  If it
 * fails the check, return false.
 * - The next check is to determine, if the value is a plain object, whether it
 * has any keys that are reserved by checking against a RESERVED_REGEXPS list.  Reserved keys are those found in CSS keyframes at-rule (e.g. "from", "to" "\d*%"), or CSS pseudo/class selectors
 * (e.g. ':*', '.*', '&*').
 *
 * Note that this is a naive but best attempt to determine if a value is
 * nested.  Nothing is stopping the consumers from providing system values
 * in arbitrary form, so a robust check is out of scope for this
 * system knowledge implementation.
 */

const RESERVED_REGEXPS = [
  /^\d*?%$/, //
  /^from$/,
  /^to$/,
  /^:/,
  /^\./,
  /^&/,
];

export const testIsNestedValue = (value) => {
  if (isPlainObject(value)) {
    return Object.keys(value).every((key) => {
      return RESERVED_REGEXPS.every((regexp) => !regexp.test(key));
    });
  }

  return false;
};
