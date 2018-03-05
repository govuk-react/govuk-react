// every export from constants should be a truthy (string, number, bool or plain non empty object)
// no functions, no undefined
import * as exports from '.';

const okTypes = ['number', 'string', 'boolean', 'object'];

describe('Constants', () => {
  for (let n = 0; n < Object.keys(exports).length; n += 1) {
    const key = Object.keys(exports)[n];

    it(`exports ${key} as valid type`, () => {
      const value = exports[key];
      // TODO: this would fail if we wanted to export a constant that was `false`
      // not sure how to do "expect one of" in Jest so leaving for now
      // as it's possible we'd never need a false constant export
      expect(value).toBeTruthy();
      expect(okTypes.includes(typeof value)).toBe(true);
    });
  }
});
