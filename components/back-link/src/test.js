import React from 'react';
import { mount, shallow } from 'enzyme';

import BackLink from './';

describe('Back Link', () => {
  const onButtonClick = jest.fn();

  it('renders without crashing', () => {
    const wrapper = shallow(<BackLink>example</BackLink>);
    expect(wrapper.exists()).toBe(true);
  });

  it('simulates click events', () => {
    const wrapper = mount(<BackLink onClick={onButtonClick}>example</BackLink>);
    wrapper.find('a').prop('onClick')();
    expect(onButtonClick).toHaveBeenCalledTimes(1);
  });

  it('adds an href when only onClick provided', () => {
    const wrapper = mount(<BackLink onClick={onButtonClick}>example</BackLink>);
    const anchor = wrapper.find('Anchor');
    expect(anchor.props().href).toBe('#');
  });

  it('does not add an href when onClick not provided', () => {
    const wrapper = mount(<BackLink>example</BackLink>);
    expect(wrapper.find('Anchor').props().href).toBeUndefined();
  });

  it('matches wrapper snapshot', () => {
    const wrapper = mount(<BackLink onClick={onButtonClick} href="#">example</BackLink>);
    expect(wrapper).toMatchSnapshot('wrapper mount');
  });
});
