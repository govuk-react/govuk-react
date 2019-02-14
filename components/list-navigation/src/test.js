import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';

import ListNavigation from '.';

const example = 'example';
const wrapper = <ListNavigation>{example}</ListNavigation>;
const wrapperMultiple = (
  <ListNavigation>
    {example}
    {example}
  </ListNavigation>
);

describe('ListNavigation', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ListNavigation>{example}</ListNavigation>, div);
  });

  it('should render an unordered list', () => {
    const output = mount(wrapper);
    expect(output.find('ul')).toHaveLength(1);
    expect(mount(wrapperMultiple).find('ul li')).toHaveLength(2);
  });

  it('matches wrapper snapshot', () => {
    expect(mount(<ListNavigation listStyleType="square">Example</ListNavigation>)).toMatchSnapshot('wrapper mount');
  });
});
