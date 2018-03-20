import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { ORANGE } from 'govuk-colours';
import Input from './';

describe('Input', () => {
  const wrapper = <Input type="text" />;
  const withError = <Input type="text" error="example" />;
  const withColouredError = <Input type="text" errorColour={ORANGE} error="example" />;

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(wrapper, div);
  });

  it('renders with error', () => {
    const div = document.createElement('div');
    ReactDOM.render(withError, div);
  });

  it('matches wrapper snapshot', () => {
    expect(mount(wrapper)).toMatchSnapshot('wrapper mount');
  });

  it('matches withError snapshot', () => {
    expect(mount(withError)).toMatchSnapshot('with error mount');
  });

  it('matches withColouredError snapshot', () => {
    expect(mount(withColouredError)).toMatchSnapshot('with error mount');
  });
});
