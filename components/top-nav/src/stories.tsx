import * as React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

import CrownIcon from '@govuk-react/icon-crown';
import { Search as SearchIcon } from '@govuk-react/icons';
import SearchBox from '@govuk-react/search-box';

import { TopNav } from '.';

const reactRouterLink = '/section';
const link = 'https://example.com?=1';
// TODO: vertical alignment here needs some work, perhaps should be its own component,
// TODO: Icon should be lined up with font baseline, e.g. vertical-align: baseline

const Company: JSX.Element = (
  <TopNav.Anchor href={link} target="new">
    <TopNav.IconTitle icon={<CrownIcon width="36" height="32" />}>GOV.UK</TopNav.IconTitle>
  </TopNav.Anchor>
);

const ServiceTitle: JSX.Element = (
  <TopNav.NavLink href={link} target="new">
    Service Title
  </TopNav.NavLink>
);

const Search: JSX.Element = (
  <SearchBox>
    <SearchBox.Input placeholder="Search" />
    <SearchBox.Button />
  </SearchBox>
);

const CompanyLink: JSX.Element = (
  <TopNav.Anchor as={Link} to={reactRouterLink}>
    <TopNav.IconTitle icon={<CrownIcon width="36" height="32" />}>GOV.UK</TopNav.IconTitle>
  </TopNav.Anchor>
);

const ServiceTitleLink: JSX.Element = (
  <TopNav.NavLink as={Link} to={reactRouterLink}>
    Service Title
  </TopNav.NavLink>
);

export default {
  title: 'Page & Layout/Top nav',
  component: TopNav,
};

export const Default: React.FC = () => <TopNav company={Company} />;

export const CustomLogo: React.FC = () => (
  <TopNav
    company={
      <TopNav.NavLink href={link} target="new">
        <TopNav.IconTitle icon={<SearchIcon width="32px" />}>Custom Title</TopNav.IconTitle>
      </TopNav.NavLink>
    }
  />
);

export const WithServiceTitle: React.FC = () => <TopNav company={Company} serviceTitle={ServiceTitle} />;

export const LogoAndServiceTitleWithReactRouterLink: React.FC = () => (
  <BrowserRouter>
    <TopNav company={CompanyLink} serviceTitle={ServiceTitleLink} />
  </BrowserRouter>
);

export const WithSearch: React.FC = () => <TopNav company={Company} serviceTitle={ServiceTitle} search={Search} />;

export const Children: React.FC = () => (
  <TopNav company={Company} serviceTitle={ServiceTitle}>
    <TopNav.NavLink href="https://example.com?q=catdog">Navigation item #1</TopNav.NavLink>
    <TopNav.NavLink href="https://example.com?q=dogcat">Navigation item #2</TopNav.NavLink>
  </TopNav>
);

export const EverythingButServiceTitle: React.FC = () => (
  <TopNav company={Company} search={Search}>
    <TopNav.NavLink href="https://example.com?q=catdog">Navigation item #1</TopNav.NavLink>
    <TopNav.NavLink href="https://example.com?q=dogcat">Navigation item #2</TopNav.NavLink>
  </TopNav>
);

export const Everything: React.FC = () => (
  <TopNav company={Company} serviceTitle={ServiceTitle} search={Search}>
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

export const EverythingWith9NavItems: React.FC = () => (
  <TopNav company={Company} serviceTitle={ServiceTitle} search={Search}>
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
