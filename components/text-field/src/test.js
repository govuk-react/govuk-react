import React from 'react';
import { mount } from 'enzyme';

import TextField, {
  exampleLabelText,
  exampleHintText,
  exampleErrorText,
  TextFieldWithHint,
  TextFieldWithError,
} from './fixtures';

describe('TextField', () => {
  let wrapper;

  it('renders without crashing', () => {
    wrapper = mount(<TextField>{exampleLabelText}</TextField>);
  });

  it('should render an input type="text"', () => {
    expect(wrapper.find('input[type="text"]')).toHaveLength(1);
  });

  it('should render a label', () => {
    expect(wrapper.find('label')).toHaveLength(1);
  });

  it('should render an input', () => {
    expect(wrapper.find('input')).toHaveLength(1);
  });

  it('label has a css class', () => {
    expect(wrapper.find('.govuk-react--label-text').length).toBeGreaterThan(1);
  });

  it('should render label text', () => {
    const labelTextValue = wrapper.find('.govuk-react--label-text').last().text();
    expect(labelTextValue).toBe(exampleLabelText);
  });

  it('matches wrapper snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe('TextField with hint', () => {
  let wrapper;

  it('renders without crashing', () => {
    wrapper = mount(<TextFieldWithHint />);
  });

  it('should render hint text', () => {
    const hintTextValue = wrapper.find('.govuk-react--hint-text').last().text();
    expect(hintTextValue).toBe(exampleHintText);
  });

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe('TextField with error', () => {
  let wrapper;

  it('renders without crashing', () => {
    wrapper = mount(<TextFieldWithError />);
  });

  it('should render error text', () => {
    const errorTextValue = wrapper.find('.govuk-react--error-text').last().text();
    expect(errorTextValue).toBe(exampleErrorText);
  });

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

