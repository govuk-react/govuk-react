import React from 'react';
import { mount } from 'enzyme';

import InsetTextTest, { InsetTextWithParagraph, testText } from './fixtures';

describe('inset text', () => {
  it('renders provided text', () => {
    const wrapper = mount(<InsetTextTest />);

    expect(wrapper.text()).toContain(testText);
  });

  it('matches the InsetText snapshot', () => {
    expect(mount(<InsetTextTest />)).toMatchSnapshot('inset text');
  });

  it('can render with a paragraph', () => {
    expect(mount(<InsetTextWithParagraph />)).toMatchSnapshot('inset text with paragraph');
  });
});
