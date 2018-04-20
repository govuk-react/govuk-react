import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import TopNav from './';

const emptyNode = [];
const nullNode = null;
const wrapper = <TopNav company="example" search="example" serviceTitle="example">example</TopNav>;
const wrapperMultiple = (
  <TopNav active={1}>
    <a href="/section">Section 1</a>
    <a href="/section">Section 1</a>
  </TopNav>
);
const wrapperEmptyNode = (
  <TopNav>
    <a href="/section">Section 1</a>
    {emptyNode}
    {nullNode}
    example
  </TopNav>
);

describe(TopNav, () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(wrapper, div);
  });

  it('should render an unordered list without ghost/duff children', () => {
    expect(mount(wrapperEmptyNode).find('ul li')).toHaveLength(2);
  });

  it('matches snapshot', () => {
    expect(mount(wrapperMultiple)).toMatchSnapshot('enzyme.mount');
  });
});
