import React from 'react';
import { mount } from 'enzyme';

import Legend from '.';

describe('Fieldset.Legend', () => {
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
    const sizes = ['XL', 'XLARGE', 'L', 'LARGE', 'M', 'MEDIUM', 'S', 'SMALL'];
    sizes.forEach(size => {
      expect(mount(<Legend size={size}>Tests</Legend>).exists()).toBeTruthy();
    });
  });

  it('allows custom numeric GDS font size without crashing', () => {
    mount(<Legend size={16}>Test</Legend>);
  });

  it('throws an error if an unsupported size is used', () => {
    expect(() => {
      mount(<Legend size={0}>example</Legend>);
    }).toThrow();
    expect(() => {
      mount(<Legend size={1}>example</Legend>);
    }).toThrow();
    expect(() => {
      mount(<Legend size={99999}>example</Legend>);
    }).toThrow();
    expect(() => {
      mount(<Legend size="test">example</Legend>);
    }).toThrow();
  });

  it('will insert a (styled) h1 tag if isPageHeading is set', () => {
    const wrapper = mount(<Legend isPageHeading>Test</Legend>);

    expect(wrapper.find('h1').exists()).toBe(true);
  });

  it('matches wrapper snapshot', () => {
    expect(mount(<Legend>Legend text</Legend>)).toMatchSnapshot();
  });
});
