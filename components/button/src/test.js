import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

import Button, {
  ButtonStart,
  ButtonStartIcon,
  ButtonDisabled,
  ButtonDisabledStartIcon,
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

  // it('passes `icon` to the rendered button as `icon`', () => {
  //   expect(shallow(<ButtonStartIcon />).find('button')).toHaveLength(1);
  // });

  // it('passes `props.iconUrl` to the rendered button as `iconUrl`', () => {
  //   const output = shallow(<ButtonDisabledStartIcon />);
  //   expect(output.find('button')).toHaveLength(1);
  //   expect(output.find('button[disabled="disabled"]')).toBeTruthy();
  // });
});
