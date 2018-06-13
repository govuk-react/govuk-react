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

  it('should render the ErrorSummary component', () => {
    expect(wrapperErrorSummary.find('Header').exists()).toBe(true);
    expect(wrapperErrorSummary.find('Paragraph').exists()).toBe(true);
    expect(wrapperErrorSummary.find('UnorderedList').exists()).toBe(true);
    expect(wrapperErrorSummary.find('UnorderedList').find('ListItem').length).toEqual(errors.length);
  });

  it('should render the heading', () => {
    expect(wrapperErrorSummary.find('Header').text()).toEqual(heading);
  });

  it('should render the optional description', () => {
    expect(wrapperErrorSummary.find('Paragraph').text()).toEqual(description);
  });

  it('should render the list of errors', () => {
    wrapperErrorSummary.find('UnorderedList').find('ListItem').forEach((listItem, index) => {
      expect(listItem.text()).toEqual(errors[index].text);
    });
  });

  it('should click on the error', () => {
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

    wrapperErrorSummaryClickMock.find('UnorderedList').find('ListItem').forEach((listItem) => {
      listItem.find('Anchor').simulate('click');
      timesClicked += 1;
      expect(mockOnHandleErrorClickCallback.mock.calls.length).toBe(timesClicked);
    });
  });

  it('matches the ErrorSummary snapshot', () => {
    expect(wrapperErrorSummary).toMatchSnapshot('error summary');
  });
});
