import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import { NavBar } from '.';

const mockHandlerFunction = jest.fn();

const props = {
  handleNavChange: mockHandlerFunction,
  activeNavTab: 'Just',
  navItems: ['Just', 'Contact', 'Circumstances', 'Category', 'Own'],
};

describe('<NavBar />', () => {
  it('renders without crashing', () => {
    const NavBarWrapper = shallow(<NavBar {...props} />);
    const div = document.createElement('div');
    ReactDOM.render(NavBarWrapper, div);
  });

  it('matches the snapshot', () => {
    const NavBarWrapper = shallow(<NavBar {...props} />);
    expect(NavBarWrapper).toMatchSnapshot();
  });

  it('should render the active tab by default', () => {
    const NavBarWrapper = mount(<NavBar {...props} />);
    expect(NavBarWrapper.find('Styled(a)').at(0).prop('active')).toEqual(true);
  });

  it('should display all the tabs passed in as props', () => {
    const NavBarWrapper = mount(<NavBar {...props} />);
    expect(NavBarWrapper.find('a').at(0).text()).toEqual(props.navItems[0]);
    expect(NavBarWrapper.find('a').at(1).text()).toEqual(props.navItems[1]);
    expect(NavBarWrapper.find('a').at(2).text()).toEqual(props.navItems[2]);
    expect(NavBarWrapper.find('a').at(3).text()).toEqual(props.navItems[3]);
    expect(NavBarWrapper.find('a').at(4).text()).toEqual(props.navItems[4]);
  });

  describe('when a tab is clicked', () => {
    const NavBarWrapper = mount(<NavBar {...props} />);

    beforeEach(() => {
      NavBarWrapper.find('a').at(1).simulate('click');
    });

    it('calls the function passed down as a prop when a tab is clicked', () => {
      expect(mockHandlerFunction).toHaveBeenCalledWith({ 'item': props.navItems[1] });
    });
  });
});
