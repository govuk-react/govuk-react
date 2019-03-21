import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import CrownIcon from '@govuk-react/icon-crown';

import TopNav, { asTopNavAnchor, asNavLinkAnchor } from '.';

const emptyNode = [];
const nullNode = null;
const Anchor = asTopNavAnchor('a');
const NavLinkAnchor = asNavLinkAnchor('a');

const wrapper = (
  <TopNav company="example" search="example" serviceTitle="example">
    example
  </TopNav>
);
const wrapperMultipleTopNavAnchor = (
  <TopNav active={1}>
    <Anchor href="/section">Section 1</Anchor>
    <Anchor href="/section">Section 1</Anchor>
  </TopNav>
);

const wrapperNavLinkAnchor = (
  <TopNav>
    <NavLinkAnchor href="/nav-link">Nav link</NavLinkAnchor>
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

const WrapperNavLinkAnchor = mount(wrapperNavLinkAnchor);
const WrapperMultipleTopNavAnchor = mount(wrapperMultipleTopNavAnchor);

describe('TopNav', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(wrapper, div);
  });

  it('should render an unordered list without ghost/duff children', () => {
    expect(mount(wrapperEmptyNode).find('ul li')).toHaveLength(2);
  });

  it('matches the <TopNav> with multiple <Anchor> tags snapshot', () => {
    expect(WrapperMultipleTopNavAnchor).toMatchSnapshot('enzyme.mount');
  });

  it('matches the props passed to the list of Anchor tags', () => {
    WrapperMultipleTopNavAnchor.find(Anchor).forEach(anchor => {
      expect(anchor.props().href).toEqual('/section');
      expect(anchor.props().children).toEqual('Section 1');
    });
  });

  it('matches the <TopNav> with a <NavLinkAnchor> tag snapshot', () => {
    expect(WrapperNavLinkAnchor).toMatchSnapshot('enzyme.mount');
  });

  it('matches the props passed to NavLinkAnchor', () => {
    expect(WrapperNavLinkAnchor.find(NavLinkAnchor).props().href).toEqual('/nav-link');
    expect(WrapperNavLinkAnchor.find(NavLinkAnchor).props().children).toEqual('Nav link');
  });

  it('with icon title', () => {
    expect(
      mount(
        <TopNav company={<TopNav.IconTitle icon={<CrownIcon width="36" height="32" />}>GOV.UK</TopNav.IconTitle>} />
      )
    ).toMatchSnapshot('icon title');
  });
});
