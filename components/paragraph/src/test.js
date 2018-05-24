import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';

import Paragraph from './';

describe(Paragraph, () => {
  const example = 'A 19px body copy paragraph. This includes even more text to give a good representation of a more average length paragraph. That way you can see more than one line wrapping.';
  const wrapper = <Paragraph>{example}</Paragraph>;

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Paragraph>Lorem ipsum</Paragraph>, div);
  });

  it('matches wrapper snapshot', () => {
    expect(mount(wrapper)).toMatchSnapshot('wrapper mount');
  });
});
