import * as React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import Spinner from '.';

const wrapper = (
  <Spinner width="100px" height="100px" fill="red">
    Example
  </Spinner>
);

describe('Spinner', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(wrapper, div);
  });

  it('matches wrapper snapshot', () => {
    expect(mount(wrapper)).toMatchSnapshot('wrapper mount');
  });
});
