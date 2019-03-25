import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';

import SearchBox from '.';

const example = 'example';
const wrapper = <SearchBox placeholder={example}>{example}</SearchBox>;

describe('SearchBox', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(wrapper, div);
  });

  it('matches wrapper snapshot', () => {
    expect(mount(wrapper)).toMatchSnapshot('wrapper mount');
  });
});
