import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import CrownIcon from '@govuk-react/icon-crown';
import { Search as SearchIcon } from '@govuk-react/icons';
import SearchBox from '@govuk-react/search-box';
import { withDocsCustom } from '@govuk-react/storybook-components';

import TopNav from '.';
import ReadMe from '../README.md';

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

const stories = storiesOf('Page/TopNav', module);
const examples = storiesOf('Page/TopNav/Examples', module);

stories.addDecorator(withDocsCustom(ReadMe));

stories.add('Component default', () => <TopNav company={Company} />);

examples.add('custom logo', () => (
  <TopNav
    company={
      <TopNav.NavLink href={link} target="new">
        <TopNav.IconTitle icon={<SearchIcon width="32px" />}>Custom Title</TopNav.IconTitle>
      </TopNav.NavLink>
    }
  />
));

examples.add('service title', () => <TopNav company={Company} serviceTitle={ServiceTitle} />);

examples.add('logo and service title with React router <Link>', () => (
  <BrowserRouter>
    <TopNav company={CompanyLink} serviceTitle={ServiceTitleLink} />
  </BrowserRouter>
));

examples.add('search', () => <TopNav company={Company} serviceTitle={ServiceTitle} search={Search} />);

examples.add('children', () => (
  <TopNav company={Company} serviceTitle={ServiceTitle} active={0}>
    <TopNav.NavLink href="https://example.com?q=catdog">Navigation item #1</TopNav.NavLink>
    <TopNav.NavLink href="https://example.com?q=dogcat">Navigation item #2</TopNav.NavLink>
  </TopNav>
));

examples.add('everything but serviceTitle', () => (
  <TopNav company={Company} search={Search} active={0}>
    <TopNav.NavLink href="https://example.com?q=catdog">Navigation item #1</TopNav.NavLink>
    <TopNav.NavLink href="https://example.com?q=dogcat">Navigation item #2</TopNav.NavLink>
  </TopNav>
));

examples.add('everything', () => (
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
));

examples.add('everything with 9 nav items', () => (
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
));
