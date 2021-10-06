import * as React from 'react';
import { mount } from 'enzyme';

import { Main } from '.';

describe('Main', () => {
  let wrapper;

  it('renders without crashing', () => {
    wrapper = mount(<Main />);
  });

  it('can render a child node', () => {
    wrapper = mount(
      <Main>
        <span>Example</span>
      </Main>
    );
    expect(wrapper.find('span')).toHaveLength(1);
  });

  it('matches wrapper snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
