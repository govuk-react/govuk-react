import React from 'react';
import { mount } from 'enzyme';
import InputField from '@govuk-react/input-field';
import withWhiteSpace from './';

const WithoutConfig = withWhiteSpace()(InputField);
const WithConfig = withWhiteSpace({ marginBottom: 0 })(InputField);

describe('withWhiteSpace', () => {
  it('renders without config without crashing', () => {
    mount(<WithoutConfig>Example</WithoutConfig>);
  });

  it('renders with config without crashing', () => {
    mount(<WithConfig>Example</WithConfig>);
  });

  it('renders with props without crashing', () => {
    mount(<WithConfig mb={5}>Example</WithConfig>);
  });

  it('renders an InputField', () => {
    const wrapper = mount(<WithConfig mb={5}>Example</WithConfig>);
    expect(wrapper.find('InputField').exists()).toBe(true);
  });

  it('matches wrapper snapshot', () => {
    const wrapper = mount(<WithConfig mb={5}>Example</WithConfig>);
    expect(wrapper).toMatchSnapshot();
  });
});
