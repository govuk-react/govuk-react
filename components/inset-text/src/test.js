import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

import InsetText, { InsetTextNarrowBorder } from './fixtures';

describe('inset text', () => {
  const wrapperInsetText = mount(<InsetText />);
  const wrapperInsetTextNarrowBorder = mount(<InsetTextNarrowBorder />);

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<InsetText />, div);
    ReactDOM.render(<InsetTextNarrowBorder />, div);
  });

  it('should render some inset text', () => {
    const output = shallow(<InsetText />);
    expect(output.find('p')).toBeTruthy();
  });

  it('matches wrapperInsetText snapshot', () => {
    expect(wrapperInsetText).toMatchSnapshot('wrapperInsetText mount');
  });

  it('should render some inset text with a narrow border', () => {
    const output = shallow(<InsetTextNarrowBorder />);
    expect(output.find('p')).toBeTruthy();
  });

  it('matches wrapperInsetTextNarrowBorder snapshot', () => {
    expect(wrapperInsetTextNarrowBorder).toMatchSnapshot('inset text narrow border');
  });

  it('should have a narrow border left width ', () => {
    expect(shallow(<InsetTextNarrowBorder />).dive().get(0).props.isNarrow).toBeTruthy();
  });
});
