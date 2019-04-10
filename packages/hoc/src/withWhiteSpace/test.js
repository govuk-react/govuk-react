import React from 'react';
import styled from 'styled-components';
import { mount } from 'enzyme';
import withWhiteSpace from '.';

describe('withWhiteSpace', () => {
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

  const WithoutConfig = withWhiteSpace()(styled('div')({}));
  const WithConfig = withWhiteSpace({ marginBottom: 0 })(styled('div')({}));

  it('renders without config without crashing', () => {
    mount(<WithoutConfig>Example</WithoutConfig>);
  });

  it('renders with config without crashing', () => {
    mount(<WithConfig>Example</WithConfig>);
  });

  it('renders with simple mb prop without crashing', () => {
    mount(<WithConfig mb={5}>Example</WithConfig>);
  });

  it('renders with a margin prop without crashing', () => {
    mount(<WithConfig margin={{ size: 5 }}>Example</WithConfig>);
    mount(<WithConfig margin={5}>Example</WithConfig>);
    mount(<WithConfig margin={[5, { size: 2, direction: 'top' }]}>Example</WithConfig>);
  });

  it('renders with a padding prop without crashing', () => {
    mount(<WithConfig padding={{ size: 5 }}>Example</WithConfig>);
    mount(<WithConfig padding={5}>Example</WithConfig>);
    mount(<WithConfig padding={[5, { size: 2, direction: 'top' }]}>Example</WithConfig>);
  });

  it('produces a deprecation warning in development', () => {
    process.env.NODE_ENV = 'development';
    mount(<WithoutConfig>Example</WithoutConfig>);

    expect(warnCallCount).not.toEqual(0);
  });
});
