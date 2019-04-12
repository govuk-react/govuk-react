import React from 'react';
import { mount } from 'enzyme';

import asAnchor from '.';

describe('asAnchor', () => {
  // capture console.warn as this is deprecated
  const OLD_ENV = process.env;
  // eslint-disable-next-line no-console
  const nativeWarn = console.warn;
  let warnCallCount;
  beforeEach(() => {
    jest.resetModules();
    process.env = { ...OLD_ENV };
    // eslint-disable-next-line no-console
    console.warn = () => {
      warnCallCount += 1;
    };
    warnCallCount = 0;
  });

  afterEach(() => {
    // eslint-disable-next-line no-console
    console.warn = nativeWarn;
    process.env = OLD_ENV;
  });

  it('produces a deprecation warning', () => {
    process.env.NODE_ENV = 'development';

    const AnchorTag = asAnchor('a');

    mount(<AnchorTag href="https://example.com">Example</AnchorTag>);

    expect(warnCallCount).not.toEqual(0);
  });
});
