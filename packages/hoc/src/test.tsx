// every export from @govuk-react/hoc should be
// - a function that takes a component and returns a component
import * as hocs from '.';

describe('@govuk-react/hoc', () => {
  // filter out private exports e.g. __esModule
  const hocNames = Object.keys(hocs).filter((hocName) => !hocName.startsWith('_'));
  for (let n = 0; n < hocNames.length; n += 1) {
    const key = hocNames[n];
    it(`exports ${key} as a function`, () => {
      const hoc = hocs[key];
      expect(hoc).toBeTruthy();
      expect(typeof hoc).toBe('function');
    });
  }
});
