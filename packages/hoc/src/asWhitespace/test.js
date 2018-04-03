import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import InputField from '@govuk-react/input-field';

import asWhitespace from './';

const InputFieldWhitespace = asWhitespace(InputField, 5);

const wrapper = <InputFieldWhitespace>Example</InputFieldWhitespace>;

describe(asWhitespace, () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(wrapper, div);
  });

  it('returns a component', () => {
    expect(shallow(wrapper).html().toBeTruthy);
  });

  it('matches wrapper snapshot', () => {
    expect(shallow(wrapper)).toMatchSnapshot('wrapper mount');
  });
});
