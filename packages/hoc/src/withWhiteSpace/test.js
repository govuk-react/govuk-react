import React from 'react';
import { shallow } from 'enzyme';
import InputField from '@govuk-react/input-field';
import withWhiteSpace from './';

const WithoutConfig = withWhiteSpace()(InputField);
const WithConfig = withWhiteSpace({ marginBottom: 0 })(InputField);
let wrapper;

describe('withWhiteSpace', () => {
  it('renders without config without crashing', () => {
    shallow(<WithoutConfig>Example</WithoutConfig>);
  });

  it('renders with config without crashing', () => {
    shallow(<WithConfig>Example</WithConfig>);
  });

  it('renders with props without crashing', () => {
    wrapper = shallow(<WithConfig mb={5}>Example</WithConfig>);
  });

  it('renders an InputField', () => {
    expect(wrapper.find('InputField').exists()).toBe(true);
  });

  it('matches wrapper snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
