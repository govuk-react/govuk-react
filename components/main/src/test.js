import React from 'react';
import { mount } from 'enzyme';

import Main from '.';

describe(Main, () => {
  let wrapper;

  it('renders without crashing', () => {
    wrapper = mount(<Main />);
  });

  it('can render a child node', () => {
    wrapper = mount(<Main><div>Exmaple</div></Main>);
  });

  it('matches wrapper snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
