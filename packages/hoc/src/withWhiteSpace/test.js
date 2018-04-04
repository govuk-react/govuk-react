import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import InputField from '@govuk-react/input-field';

import withWhiteSpace from './';

const config = {
  marginBottom: 0,
};

const InputFieldWithWhiteSpace = withWhiteSpace(config)(InputField);

const wrapper = <InputFieldWithWhiteSpace>Example</InputFieldWithWhiteSpace>;
const wrapperWithMarginBottom = <InputFieldWithWhiteSpace mb={3}>Example</InputFieldWithWhiteSpace>;

describe(withWhiteSpace, () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(wrapper, div);
    ReactDOM.render(wrapperWithMarginBottom, div);
  });

  it('returns a component', () => {
    expect(shallow(wrapper).html().toBeTruthy);
  });

  it('matches wrapper snapshot', () => {
    expect(shallow(wrapper)).toMatchSnapshot('wrapper mount');
  });
});
