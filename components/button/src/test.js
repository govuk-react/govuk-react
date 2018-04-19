import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

import Button, {
  ButtonStart,
  ButtonStartIcon,
  ButtonDisabled,
} from './fixtures';

describe('button', () => {
  const wrapper = <Button />;
  const wrapper2 = <ButtonStartIcon />;

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(wrapper, div);
    ReactDOM.render(wrapper2, div);
  });

  it('should render a button', () => {
    const output = shallow(wrapper);
    expect(output.find('button')).toBeTruthy();
  });

  it('should render a disabled button', () => {
    const output = shallow(<ButtonDisabled />);
    expect(output.find('button[disabled="disabled"]')).toBeTruthy();
  });

  it('matches wrapper snapshot', () => {
    expect(mount(wrapper)).toMatchSnapshot('wrapper mount');
  });

  it('passes `props.start` to the rendered button as `start`', () => {
    expect(mount(<ButtonStart />).find('button')).toHaveLength(1);
  });
});
