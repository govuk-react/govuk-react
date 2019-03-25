import React from 'react';
import { mount } from 'enzyme';

import Caption from './fixtures';

describe('Caption', () => {
  // Capture errors as we're expecting to throw some
  // eslint-disable-next-line no-console
  const nativeError = console.error;
  beforeEach(() => {
    jest.resetModules();
    // eslint-disable-next-line no-console
    console.error = () => {};
  });

  afterEach(() => {
    // eslint-disable-next-line no-console
    console.error = nativeError;
  });

  it('allows custom string-based font size without crashing', () => {
    const sizes = ['XL', 'XLARGE', 'L', 'LARGE', 'M', 'MEDIUM'];
    sizes.forEach(size => {
      expect(mount(<Caption size={size}>Tests</Caption>).exists()).toBeTruthy();
    });
  });

  it('allows custom numeric GDS font size without crashing', () => {
    mount(<Caption size={16}>Test</Caption>);
  });

  it('throws an error if an unsupported size is used', () => {
    expect(() => {
      mount(<Caption size={0}>example</Caption>);
    }).toThrow();
    expect(() => {
      mount(<Caption size={1}>example</Caption>);
    }).toThrow();
    expect(() => {
      mount(<Caption size={99999}>example</Caption>);
    }).toThrow();
    expect(() => {
      mount(<Caption size="test">example</Caption>);
    }).toThrow();
  });

  it('matches wrapper snapshot', () => {
    expect(mount(<Caption>Heading text</Caption>)).toMatchSnapshot();
  });
});
