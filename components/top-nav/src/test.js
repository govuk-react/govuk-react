import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import TopNav, { asAnchor } from './';

const emptyNode = [];
const nullNode = null;
const Anchor = asAnchor('a');
const wrapper = <TopNav company="example" search="example" serviceTitle="example">example</TopNav>;
const wrapperMultiple = (
  <TopNav active={1}>
    <Anchor href="/section">Section 1</Anchor>
    <Anchor href="/section">Section 1</Anchor>
  </TopNav>
);
const wrapperEmptyNode = (
  <TopNav>
    <Anchor href="/section">Section 1</Anchor>
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
