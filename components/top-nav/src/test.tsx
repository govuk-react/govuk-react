import * as React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import CrownIcon from '@govuk-react/icon-crown';

import { TopNav } from '.';

const emptyNode = [];
const nullNode = null;

const wrapper = (
  <TopNav company="example" search="example" serviceTitle="example">
    example
  </TopNav>
);
const wrapperMultipleTopNavAnchor = (
  <TopNav>
    <TopNav.Anchor href="/section">Section 1</TopNav.Anchor>
    <TopNav.Anchor href="/section">Section 1</TopNav.Anchor>
  </TopNav>
);

const wrapperNavLinkAnchor = (
  <TopNav>
    <TopNav.NavLink href="/nav-link">Nav link</TopNav.NavLink>
  </TopNav>
);

const wrapperEmptyNode = (
  <TopNav>
    <TopNav.Anchor href="/section">Section 1</TopNav.Anchor>
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
    WrapperMultipleTopNavAnchor.find(TopNav.Anchor).forEach((anchor) => {
      expect(anchor.props().href).toEqual('/section');
      expect(anchor.props().children).toEqual('Section 1');
    });
  });

  it('matches the <TopNav> with a <NavLinkAnchor> tag snapshot', () => {
    expect(WrapperNavLinkAnchor).toMatchSnapshot('enzyme.mount');
  });

  it('matches the props passed to NavLinkAnchor', () => {
    expect(WrapperNavLinkAnchor.find(TopNav.NavLink).props().href).toEqual('/nav-link');
    expect(WrapperNavLinkAnchor.find(TopNav.NavLink).props().children).toEqual('Nav link');
  });

  it('with icon title', () => {
    expect(
      mount(
        <TopNav company={<TopNav.IconTitle icon={<CrownIcon width="36" height="32" />}>GOV.UK</TopNav.IconTitle>} />
      )
    ).toMatchSnapshot('icon title');
  });
});
