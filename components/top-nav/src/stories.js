import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

import CrownIcon from '@govuk-react/icon-crown';
import { Search as SearchIcon } from '@govuk-react/icons';
import SearchBox from '@govuk-react/search-box';

import TopNav from '.';

const reactRouterLink = '/section';
const link = 'https://example.com?=1';
// TODO: vertical alignment here needs some work, perhaps should be its own component,
// TODO: Icon should be lined up with font baseline, e.g. vertical-align: baseline

const Company = (
  <TopNav.Anchor href={link} target="new">
    <TopNav.IconTitle icon={<CrownIcon width="36" height="32" />}>GOV.UK</TopNav.IconTitle>
  </TopNav.Anchor>
);

const ServiceTitle = (
  <TopNav.NavLink href={link} target="new">
    Service Title
  </TopNav.NavLink>
);

const Search = (
  <SearchBox>
    <SearchBox.Input placeholder="Search" />
    <SearchBox.Button />
  </SearchBox>
);

const CompanyLink = (
  <TopNav.Anchor as={Link} to={reactRouterLink}>
    <TopNav.IconTitle icon={<CrownIcon width="36" height="32" />}>GOV.UK</TopNav.IconTitle>
  </TopNav.Anchor>
);

const ServiceTitleLink = (
  <TopNav.NavLink as={Link} to={reactRouterLink}>
    Service Title
  </TopNav.NavLink>
);

export default {
  title: 'Page & Layout/Top nav',
  component: TopNav,
};

export const Default = () => <TopNav company={Company} />;

export const CustomLogo = () => (
  <TopNav
    company={
      <TopNav.NavLink href={link} target="new">
        <TopNav.IconTitle icon={<SearchIcon width="32px" />}>Custom Title</TopNav.IconTitle>
      </TopNav.NavLink>
    }
  />
);

export const WithServiceTitle = () => <TopNav company={Company} serviceTitle={ServiceTitle} />;

export const LogoAndServiceTitleWithReactRouterLink = () => (
  <BrowserRouter>
    <TopNav company={CompanyLink} serviceTitle={ServiceTitleLink} />
  </BrowserRouter>
);

export const WithSearch = () => <TopNav company={Company} serviceTitle={ServiceTitle} search={Search} />;

export const Children = () => (
  <TopNav company={Company} serviceTitle={ServiceTitle} active={0}>
    <TopNav.NavLink href="https://example.com?q=catdog">Navigation item #1</TopNav.NavLink>
    <TopNav.NavLink href="https://example.com?q=dogcat">Navigation item #2</TopNav.NavLink>
  </TopNav>
);

export const EverythingButServiceTitle = () => (
  <TopNav company={Company} search={Search} active={0}>
    <TopNav.NavLink href="https://example.com?q=catdog">Navigation item #1</TopNav.NavLink>
    <TopNav.NavLink href="https://example.com?q=dogcat">Navigation item #2</TopNav.NavLink>
  </TopNav>
);

export const Everything = () => (
  <TopNav company={Company} serviceTitle={ServiceTitle} search={Search} active={0}>
    <TopNav.NavLink href="https://example.com?q=catdog" target="new">
      Navigation item
    </TopNav.NavLink>
    <TopNav.NavLink href="https://example.com?q=dogcat" target="new">
      Navigation item
    </TopNav.NavLink>
    <TopNav.NavLink href="https://example.com?q=dogcat" target="new">
      Navigation item
    </TopNav.NavLink>
    <TopNav.NavLink href="https://example.com?q=dogcat" target="new">
      Navigation item
    </TopNav.NavLink>
    <TopNav.NavLink href="https://example.com?q=dogcat" target="new">
      Navigation item
    </TopNav.NavLink>
    <TopNav.NavLink href="https://example.com?q=dogcat" target="new">
      Navigation item
    </TopNav.NavLink>
  </TopNav>
);

export const EverythingWith9NavItems = () => (
  <TopNav company={Company} serviceTitle={ServiceTitle} search={Search} active={0}>
    <TopNav.NavLink href="https://example.com?q=catdog" target="new">
      Navigation item
    </TopNav.NavLink>
    <TopNav.NavLink href="https://example.com?q=dogcat" target="new">
      Navigation item
    </TopNav.NavLink>
    <TopNav.NavLink href="https://example.com?q=dogcat" target="new">
      Navigation item
    </TopNav.NavLink>
    <TopNav.NavLink href="https://example.com?q=dogcat" target="new">
      Navigation item
    </TopNav.NavLink>
    <TopNav.NavLink href="https://example.com?q=dogcat" target="new">
      Navigation item
    </TopNav.NavLink>
    <TopNav.NavLink href="https://example.com?q=dogcat" target="new">
      Navigation item
    </TopNav.NavLink>
    <TopNav.NavLink href="https://example.com?q=dogcat" target="new">
      Navigation item
    </TopNav.NavLink>
    <TopNav.NavLink href="https://example.com?q=dogcat" target="new">
      Navigation item
    </TopNav.NavLink>
    <TopNav.NavLink href="https://example.com?q=dogcat" target="new">
      Navigation item
    </TopNav.NavLink>
  </TopNav>
);
