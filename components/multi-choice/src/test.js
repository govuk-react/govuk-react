import React from 'react';
import { mount } from 'enzyme';

import MultiChoice from './';

describe(MultiChoice, () => {
  it('renders with a label', () => {
    const wrapper = mount(<MultiChoice label="Label">Example</MultiChoice>);
    expect(wrapper.find('LabelText').contains('Label')).toBe(true);
  });

  it('renders with a hint', () => {
    const wrapper = mount(<MultiChoice label="Label" hint="Hint">Example</MultiChoice>);
    expect(wrapper.find('HintText').contains('Hint')).toBe(true);
  });

  it('matches snapshot', () => {
    const wrapper = mount(<MultiChoice label="Label" hint="Hint">Example</MultiChoice>);
    expect(wrapper).toMatchSnapshot('should not have ErrorText');
  });

  it('renders with error', () => {
    const metaData = { touched: true, error: 'Example error' };
    const wrapper = mount(<MultiChoice label="Label" meta={metaData}>Example</MultiChoice>);
    expect(wrapper.find('ErrorText').contains('Example error')).toBe(true);
  });

  it('matches withError snapshot', () => {
    const metaData = { touched: true, error: 'Example error' };
    const wrapper = mount(<MultiChoice label="Label" meta={metaData}>Example</MultiChoice>);
    expect(wrapper).toMatchSnapshot('should have ErrorText');
  });
});
