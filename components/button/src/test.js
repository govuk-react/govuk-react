import React from 'react';
import { mount } from 'enzyme';

import Button, {
  ButtonStart,
  ButtonStartIcon,
  ButtonDisabled,
} from './fixtures';

describe('button', () => {
  let wrapper;

  it('renders without crashing', () => {
    wrapper = mount(<Button>Example</Button>);
  });

  it('should render a button', () => {
    expect(wrapper.find('button')).toBeTruthy();
  });

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe('disabled button', () => {
  let wrapper;

  it('renders without crashing', () => {
    wrapper = mount(<ButtonDisabled />);
  });

  it('should render a button with the disabled attribute', () => {
    expect(wrapper.find('button').prop('disabled')).toBeTruthy();
  });

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe('start button', () => {
  let wrapper;

  it('renders without crashing', () => {
    wrapper = mount(<ButtonStart />);
  });

  it('should render a button with the isStart prop', () => {
    expect(wrapper.find('button').parent().prop('isStart')).toBeTruthy();
  });

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe('button with icon', () => {
  let wrapper;

  it('renders without crashing', () => {
    wrapper = mount(<ButtonStartIcon />);
  });

  it('should render an SVG icon within the button', () => {
    expect(wrapper.find('SVG')).toHaveLength(1);
  });

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
