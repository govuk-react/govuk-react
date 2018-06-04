import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import CrownIcon from '@govuk-react/icon-crown';
import { Search as SearchIcon } from '@govuk-react/icons';
import SearchBox from '@govuk-react/search-box';
import Header from '@govuk-react/header';

import TopNav, { asLogoAnchor, asNavLinkAnchor } from '.';

const LogoAnchor = asLogoAnchor('a');
const NavAnchor = asNavLinkAnchor('a');

const LogoLink = asLogoAnchor(Link);
const NavLink = asNavLinkAnchor(Link);

const reactRouterLink = '/section';
const link = 'https://example.com?=1';
// TODO: vertical alignment here needs some work, perhaps should be its own component,
// icon should be lined up with font baseline, e.g. vertical-align: baseline

const Company = (
  <LogoAnchor href={link} target="new">
    <TopNav.IconTitle icon={<CrownIcon width="36" height="32" />}>GOV.UK</TopNav.IconTitle>
  </LogoAnchor>
);

const ServiceTitle = (
  <NavAnchor href={link} target="new">
    <Header level={3}>Service Title</Header>
  </NavAnchor>
);

const Search = (
  <SearchBox placeholder="Search">hi</SearchBox>
);

const CompanyLink = (
  <LogoLink to={reactRouterLink}>
    <TopNav.IconTitle icon={<CrownIcon width="36" height="32" />}>GOV.UK</TopNav.IconTitle>
  </LogoLink>
);

const ServiceTitleLink = (
  <NavLink to={reactRouterLink}>
    <Header level={3}>Service Title</Header>
  </NavLink>
);

storiesOf('TopNav', module).add('default', () => (
  <TopNav company={Company} />
));

storiesOf('TopNav', module).add('custom logo', () => (
  <TopNav company={
    <NavAnchor href={link} target="new">
      <TopNav.IconTitle icon={<SearchIcon width="32px" />}>Custom Title</TopNav.IconTitle>
    </NavAnchor>}
  />
));

storiesOf('TopNav', module).add('Logo and service title with React router <Link>', () => (
  <BrowserRouter>
    <TopNav company={CompanyLink} serviceTitle={ServiceTitleLink} />
  </BrowserRouter>
));

storiesOf('TopNav', module).add('service title', () => (
  <TopNav company={Company} serviceTitle={ServiceTitle} />
));

storiesOf('TopNav', module).add('search', () => (
  <TopNav company={Company} serviceTitle={ServiceTitle} search={Search} />
));

storiesOf('TopNav', module).add('children', () => (
  <TopNav company={Company} serviceTitle={ServiceTitle} active={0}>
    <NavAnchor href="https://example.com?q=catdog">Navigation item #1</NavAnchor>
    <NavAnchor href="https://example.com?q=dogcat">Navigation item #2</NavAnchor>
  </TopNav>
));

storiesOf('TopNav', module).add('everything but serviceTitle', () => (
  <TopNav company={Company} search={Search} active={0}>
    <NavAnchor href="https://example.com?q=catdog">Navigation item #1</NavAnchor>
    <NavAnchor href="https://example.com?q=dogcat">Navigation item #2</NavAnchor>
  </TopNav>
));

storiesOf('TopNav', module).add('everything', () => (
  <TopNav company={Company} serviceTitle={ServiceTitle} search={Search} active={0}>
    <NavAnchor href="https://example.com?q=catdog" target="new">Navigation item #1</NavAnchor>
    <NavAnchor href="https://example.com?q=dogcat" target="new">Navigation item #2</NavAnchor>
  </TopNav>
));


storiesOf('TopNav', module).add('everything with 9 nav items', () => (
  <TopNav company={Company} serviceTitle={ServiceTitle} search={Search} active={0}>
    <NavAnchor href="https://example.com?q=catdog" target="new">Navigation item</NavAnchor>
    <NavAnchor href="https://example.com?q=dogcat" target="new">Navigation item</NavAnchor>
    <NavAnchor href="https://example.com?q=dogcat" target="new">Navigation item</NavAnchor>
    <NavAnchor href="https://example.com?q=dogcat" target="new">Navigation item</NavAnchor>
    <NavAnchor href="https://example.com?q=dogcat" target="new">Navigation item</NavAnchor>
    <NavAnchor href="https://example.com?q=dogcat" target="new">Navigation item</NavAnchor>
    <NavAnchor href="https://example.com?q=dogcat" target="new">Navigation item</NavAnchor>
    <NavAnchor href="https://example.com?q=dogcat" target="new">Navigation item</NavAnchor>
    <NavAnchor href="https://example.com?q=dogcat" target="new">Navigation item</NavAnchor>
  </TopNav>
));
