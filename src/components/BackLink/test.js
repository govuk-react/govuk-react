import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import sinon from 'sinon';

import BackLink from './';

describe('Back Link', () => {
  const onButtonClick = sinon.spy();
  const example = 'example';
  const wrapper = <BackLink goBack={onButtonClick}>{example}</BackLink>;

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(wrapper, div);
  });

  it('simulates click events', () => {
    mount(wrapper)
      .find('button')
      .simulate('click');
    expect(onButtonClick).toHaveProperty('callCount', 1);
  });

  it('matches wrapper snapshot', () => {
    expect(mount(wrapper)).toMatchSnapshot('wrapper mount');
  });
});
