import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { createSerializer } from 'jest-emotion';
import * as emotion from 'emotion';

import Breadcrumb from './';

expect.addSnapshotSerializer(createSerializer(emotion));

describe('breadcrumb', () => {
  const emptyNode = [];
  const nullNode = null;
  const wrapper = <Breadcrumb>example</Breadcrumb>;
  const wrapperMultiple = (
    <Breadcrumb>
      <a href="/section">Section 1</a>
      example
    </Breadcrumb>
  );
  const wrapperEmptyNode = (
    <Breadcrumb>
      <a href="/section">Section 1</a>
      {emptyNode}
      {nullNode}
      example
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

  it('allows attributes to be set', () => {
    const output = mount(<Breadcrumb id="test" className="test">Crumb</Breadcrumb>);

    expect(output.hasClass('test')).toBe(true);
    expect(output.is('#test')).toBe(true);
  });

  it('matches snapshot', () => {
    expect(mount(wrapperMultiple)).toMatchSnapshot('enzyme.mount');
  });
});
