import React from 'react';
import { mount } from 'enzyme';

import Breadcrumb from '.';

describe('breadcrumb', () => {
  // Disable console.warn because this is deprecated
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

    mount(<Breadcrumb>Test</Breadcrumb>);
    mount(
      <Breadcrumb id="test" className="test">
        <Breadcrumb.Link href="/section">Section 1</Breadcrumb.Link>
        {[] /* empty node */}
        {null /* null node */}
        example
      </Breadcrumb>
    );

    expect(warnCallCount).not.toEqual(0);
  });
});
