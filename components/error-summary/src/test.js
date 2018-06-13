import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';

import ErrorSummary, { heading, description, errors } from './fixtures';

describe('error summary', () => {
  const wrapperErrorSummary = mount(<ErrorSummary />);

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ErrorSummary />, div);
  });

  it('should render the ErrorSummary component', () => {
    const output = mount(<ErrorSummary />);
    expect(output.find('Header')).toBeTruthy();
    expect(output.find('Paragraph')).toBeTruthy();
    expect(output.find('UnorderedList')).toBeTruthy();
    expect(output.find('UnorderedList').find('ListItem').length).toEqual(errors.length);
  });

  it('should render the heading', () => {
    const output = mount(<ErrorSummary />);
    expect(output.find('Header').text()).toEqual(heading);
  });

  it('should render the optional description', () => {
    const output = mount(<ErrorSummary />);
    expect(output.find('Paragraph').text()).toEqual(description);
  });

  it('should render the list of errors', () => {
    const output = mount(<ErrorSummary />);

    output.find('UnorderedList').find('ListItem').forEach((listItem, index) => {
      expect(listItem.text()).toEqual(errors[index].text);
    });
  });

  it('matches the ErrorSummary snapshot', () => {
    expect(wrapperErrorSummary).toMatchSnapshot('error summary');
  });
});
