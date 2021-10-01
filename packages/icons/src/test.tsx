// every export from @govuk-react/icons should be a React component that renders an SVG
// icons should be stateless therefore should be a function
import { mount } from 'enzyme';
import * as React from 'react';

import * as icons from '.';

describe('@govuk-react/icons', () => {
  // filter out private exports e.g. __esModule
  const componentNames = Object.keys(icons).filter((componentName) => !componentName.startsWith('_'));
  for (let n = 0; n < componentNames.length; n += 1) {
    const key = componentNames[n];
    it(`exports ${key} as a React component that renders an SVG`, () => {
      const Component = icons[key];
      // TODO: this would fail if we wanted to export a constant that was `false`
      // not sure how to do "expect one of" in Jest so leaving for now
      // as it's possible we'd never need a false constant export
      expect(Component).toBeTruthy();
      // icons should be stateless so we expect a function
      expect(typeof Component).toBe('function');
      expect(mount(<Component />).find('svg')).toHaveLength(1);
    });
  }
});
