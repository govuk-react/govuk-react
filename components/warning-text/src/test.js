import React from 'react';
import { mount } from 'enzyme';
import WarningText from './fixtures';

describe('WarningText', () => {
  const exampleText =
    'A very long warning message. This includes a lot of text to give a good representation of a more average length warning. That way you can see more than one line wrapping.';
  let wrapper;

  it('renders without crashing', () => {
    wrapper = mount(<WarningText>{exampleText}</WarningText>);
  });
  it('renders an SVG', () => {
    expect(wrapper.find('svg')).toHaveLength(1);
  });
  it('renders expected strong text', () => {
    expect(wrapper.find('strong').text()).toBe(exampleText);
  });
  it('to match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
