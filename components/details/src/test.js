import React from 'react';
import { mount } from 'enzyme';

import { DetailsSimple, summaryText, paragraphs } from './fixtures';

describe('details', () => {
  it('should render the provided text and content', () => {
    const wrapper = mount(<DetailsSimple />);

    expect(wrapper.text()).toContain(summaryText);
    expect(wrapper.text()).toContain(paragraphs[0]);
  });

  it('matches the Details snapshot', () => {
    expect(mount(<DetailsSimple />)).toMatchSnapshot('details');
  });
});
