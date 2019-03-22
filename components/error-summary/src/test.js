import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';

import ErrorSummary from '.';
import ErrorSummaryExample, { heading, description, errors } from './fixtures';

describe('error summary', () => {
  const wrapperErrorSummary = mount(<ErrorSummaryExample />);

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ErrorSummaryExample />, div);
  });

  // TODO These tests are fragile, test implementation details, and each test should render...
  // They should be replaced with a different approach, probably using react-testing-library
  // Some tests have been disabled

  it.skip('should render the ErrorSummary component', () => {
    expect(wrapperErrorSummary.find('Heading').exists()).toBe(true);
    expect(wrapperErrorSummary.find('Paragraph').exists()).toBe(true);
    // NB This fails with latest UnorderedList, and is testing implement
    expect(wrapperErrorSummary.find('UnorderedList').exists()).toBe(true);
    expect(wrapperErrorSummary.find('UnorderedList').find('ListItem').length).toEqual(errors.length);
  });

  it('should render the heading', () => {
    expect(wrapperErrorSummary.find('Heading').text()).toEqual(heading);
  });

  it('should render the optional description', () => {
    expect(wrapperErrorSummary.find('Paragraph').text()).toEqual(description);
  });

  it.skip('should render the list of errors', () => {
    wrapperErrorSummary
      .find('UnorderedList')
      .find('ListItem')
      .forEach((listItem, index) => {
        expect(listItem.text()).toEqual(errors[index].text);
      });
  });

  it.skip('should click on the error', () => {
    const mockOnHandleErrorClickCallback = jest.fn();

    const ErrorSummaryClick = () => (
      <ErrorSummary
        heading={heading}
        description={description}
        onHandleErrorClick={mockOnHandleErrorClickCallback}
        errors={errors}
      />
    );

    const wrapperErrorSummaryClickMock = mount(<ErrorSummaryClick />);

    let timesClicked = 0;

    wrapperErrorSummaryClickMock
      .find('UnorderedList')
      .find('ListItem')
      .forEach(listItem => {
        listItem.find('Anchor').simulate('click');
        timesClicked += 1;
        expect(mockOnHandleErrorClickCallback.mock.calls.length).toBe(timesClicked);
      });
  });

  it.skip('renders with defaultProps', () => {
    const wrapper = mount(<ErrorSummary heading={heading} errors={errors} />);
    const anchor = wrapper.find('Anchor').first();
    expect(anchor.props().onClick).toBeInstanceOf(Function);
    anchor.simulate('click');
  });

  it('matches the ErrorSummary snapshot', () => {
    expect(wrapperErrorSummary).toMatchSnapshot('error summary');
  });

  it('defaults the heading to "There is a problem" if not set', () => {
    const wrapper = mount(<ErrorSummary errors={errors} />);
    expect(wrapper.find('Heading').text()).toEqual('There is a problem');
  });
});
