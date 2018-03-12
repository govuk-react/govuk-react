import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';

import Breadcrumb from './';

describe('breadcrumb', () => {
  const example = 'example';
  const emptyNode = [];
  const wrapper = <Breadcrumb>{example}</Breadcrumb>;
  const wrapperMultiple = (
    <Breadcrumb>
      <a href="/section">Section 1</a>
      {example}
    </Breadcrumb>
  );
  const wrapperEmptyNode = (
    <Breadcrumb>
      <a href="/section">Section 1</a>
      {emptyNode}
      {example}
    </Breadcrumb>
  );

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(wrapper, div);
  });

  it('should render an item in unordered list', () => {
    const output = mount(wrapper);
    expect(output.find('ul')).toHaveLength(1);
  });

  it('should render multiple items in unordered list', () => {
    expect(mount(wrapperMultiple).find('ul li')).toHaveLength(2);
  });

  it('should render an unordered list without ghost/duff children', () => {
    expect(mount(wrapperEmptyNode).find('ul li')).toHaveLength(2);
  });

  it('matches snapshot', () => {
    expect(mount(wrapperMultiple)).toMatchSnapshot('enzyme.mount');
  });
});
