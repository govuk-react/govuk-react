import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import TabbedNav from '.';

const mockHandlerFunction = jest.fn();

const props = {
  handleNavChange: mockHandlerFunction,
  activeNavTab: 'Just',
  navItems: ['Just', 'Contact', 'Circumstances', 'Category', 'Own'],
};

describe('<TabbedNav />', () => {
  it('renders without crashing', () => {
    const TabbedNavWrapper = shallow(<TabbedNav {...props} />);
    const div = document.createElement('div');
    ReactDOM.render(TabbedNavWrapper, div);
  });

  it('matches the snapshot', () => {
    const TabbedNavWrapper = shallow(<TabbedNav {...props} />);
    expect(TabbedNavWrapper).toMatchSnapshot();
  });

  it('should render the active tab by default', () => {
    const TabbedNavWrapper = mount(<TabbedNav {...props} />);
    expect(TabbedNavWrapper.find('Styled(a)').at(0).prop('active')).toEqual(true);
  });

  it('should display all the tabs passed in as props', () => {
    const TabbedNavWrapper = mount(<TabbedNav {...props} />);
    expect(TabbedNavWrapper.find('a').at(0).text()).toEqual(props.navItems[0]);
    expect(TabbedNavWrapper.find('a').at(1).text()).toEqual(props.navItems[1]);
    expect(TabbedNavWrapper.find('a').at(2).text()).toEqual(props.navItems[2]);
    expect(TabbedNavWrapper.find('a').at(3).text()).toEqual(props.navItems[3]);
    expect(TabbedNavWrapper.find('a').at(4).text()).toEqual(props.navItems[4]);
  });

  describe('when a tab is clicked', () => {
    const TabbedNavWrapper = mount(<TabbedNav {...props} />);

    beforeEach(() => {
      TabbedNavWrapper.find('a').at(1).simulate('click');
    });

    it('calls the function passed down as a prop when a tab is clicked', () => {
      expect(mockHandlerFunction).toHaveBeenCalledWith({ 'item': props.navItems[1] });
    });
  });
});
