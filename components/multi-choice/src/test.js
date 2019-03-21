import React from 'react';
import { mount } from 'enzyme';

import MultiChoice from '.';
import MultiChoiceWithKnobs, { MultiChoiceWithKnobsHint, MultiChoiceWithKnobsError } from './fixtures';

describe('MultiChoice', () => {
  it('renders with a label', () => {
    const wrapper = mount(<MultiChoiceWithKnobs />);
    expect(wrapper.find('LabelText').contains('Example label')).toBe(true);
  });

  it('renders with a hint', () => {
    const wrapper = mount(<MultiChoiceWithKnobsHint />);
    expect(wrapper.find('HintText').contains('Example hint')).toBe(true);
  });

  it('renders with an error', () => {
    const wrapper = mount(<MultiChoiceWithKnobsError />);
    expect(wrapper.find('ErrorText').contains('Example error')).toBe(true);
  });

  it('matches snapshot', () => {
    const metaData = { touched: true, error: 'Example error' };
    const wrapper = mount(<MultiChoice label="Example label" hint="Example hint" meta={metaData} />);
    expect(wrapper).toMatchSnapshot();
  });
});
