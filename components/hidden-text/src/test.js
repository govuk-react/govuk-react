import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

import Paragraph from '@govuk-react/paragraph';
import HiddenText, { summaryText, paragraphs } from './fixtures';

describe('hidden text', () => {
  const wrapperHiddenText = mount(<HiddenText />);

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<HiddenText />, div);
  });

  it('should render the HiddenText component', () => {
    const output = shallow(<HiddenText />);
    expect(output.find(Paragraph).length).toEqual(paragraphs.length);
  });

  it('should render the summary text', () => {
    const output = shallow(<HiddenText />);
    expect(output.get(0).props.summaryText).toEqual(summaryText);
  });

  it('should render the expected text in each of the Paragraph components', () => {
    const output = shallow(<HiddenText />);
    const paragraphList = output.find(Paragraph);

    paragraphList.forEach((paragraph, index) => {
      expect(paragraph.get(0).props.children).toEqual(paragraphs[index]);
    });
  });

  it('should be closed by default', () => {
    const output = mount(<HiddenText />);
    const detailsElement = output.find('details');

    expect(detailsElement.get(0).props.open).toEqual(undefined);
  });

  it('matches the HiddenText snapshot', () => {
    expect(wrapperHiddenText).toMatchSnapshot('hidden text');
  });
});
