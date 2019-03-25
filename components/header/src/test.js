import React from 'react';
import { mount } from 'enzyme';

import Header from '.';
import { H1, H2, H3, H4, H5, H6 } from './presets';

describe('Header', () => {
  // Capture console.warn and console.error, as this is deprecated and produces errors
  const OLD_ENV = process.env;
  // eslint-disable-next-line no-console
  const nativeWarn = console.warn;
  // eslint-disable-next-line no-console
  const nativeError = console.error;
  let warnCallCount;
  beforeEach(() => {
    jest.resetModules();
    process.env = { ...OLD_ENV };
    // eslint-disable-next-line no-console
    console.warn = () => {
      warnCallCount += 1;
    };
    // eslint-disable-next-line no-console
    console.error = () => {};
    warnCallCount = 0;
  });

  afterEach(() => {
    // eslint-disable-next-line no-console
    console.warn = nativeWarn;
    // eslint-disable-next-line no-console
    console.error = nativeError;
    process.env = OLD_ENV;
  });

  it('produces deprecation warning', () => {
    process.env.NODE_ENV = 'development';

    mount(<Header>example</Header>);
    mount(<Header size="SMALL">Test</Header>);
    mount(<Header size={16}>Test</Header>);
    mount(<H1>example</H1>);
    mount(<H2>example</H2>);
    mount(<H3>example</H3>);
    mount(<H4>example</H4>);
    mount(<H5>example</H5>);
    mount(<H6>example</H6>);

    expect(warnCallCount).not.toEqual(0);
  });

  it('throws an error if an unsupported size is used', () => {
    expect(() => {
      mount(<Header size={0}>example</Header>);
    }).toThrow();
    expect(() => {
      mount(<Header size={1}>example</Header>);
    }).toThrow();
    expect(() => {
      mount(<Header size={99999}>example</Header>);
    }).toThrow();
    expect(() => {
      mount(<Header size="test">example</Header>);
    }).toThrow();
  });
});
