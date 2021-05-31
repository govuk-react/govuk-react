import * as packageExports from '.';

describe('Exports', () => {
  // all exports are truthy
  Object.keys(packageExports).map((exportName) =>
    it(`${exportName} is truthy`, () => {
      expect(!!packageExports[exportName]).toBe(true);
    })
  );
});
