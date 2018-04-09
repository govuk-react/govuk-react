// TODO: this does not currently test the purpose of src/index.js
// It should:
// - ensure all components are exported
// - ensure all exports are components or functions

import * as pkgs from './index';

describe('Exports', () => {
  // all exports are truthy
  Object.keys(pkgs).map(pkgName => it(`${pkgName} is truthy`, () => {
    expect(!!pkgs[pkgName]).toBe(true);
  }));
});
