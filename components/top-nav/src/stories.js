import React from 'react';
import { storiesOf } from '@storybook/react';
import CrownIcon from '@govuk-react/icon-crown';
import { Search as SearchIcon } from '@govuk-react/icons';
import SearchBox from '@govuk-react/search-box';
import Header from '@govuk-react/header';
import { WithDocsCustom } from '@govuk-react/storybook-components';

import TopNav, { LogoAnchor, NavLinkAnchor } from '.';
import ReadMe from '../README.md';

const link = 'https://example.com?=1';
// TODO: vertical alignment here needs some work, perhaps should be its own component,
// icon should be lined up with font baseline, e.g. vertical-align: baseline

const Company = (
  <LogoAnchor href={link} target="new">
    <TopNav.IconTitle
      icon={<CrownIcon width="36" height="32" />}
    >
      GOV.UK
    </TopNav.IconTitle>
  </LogoAnchor>
);

const ServiceTitle = (
  <NavLinkAnchor href={link} target="new">
    <Header level={3}>
        Service Title
    </Header>
  </NavLinkAnchor>
);

const Search = (
  <SearchBox placeholder="Search">hi</SearchBox>
);

const stories = storiesOf('Page/TopNav', module);
const examples = storiesOf('Page/TopNav/Examples', module);

stories.addDecorator(WithDocsCustom(ReadMe));

stories.add('Component default', () => (
  <TopNav company={Company} />
));

examples.add('custom logo', () => (
  <TopNav company={
    <NavLinkAnchor href={link} target="new">
      <TopNav.IconTitle
        icon={<SearchIcon width="32px" />}
      >
        Custom Title
      </TopNav.IconTitle>
    </NavLinkAnchor>}
  />
));


examples.add('service title', () => (
  <TopNav company={Company} serviceTitle={ServiceTitle} />
));

examples.add('search', () => (
  <TopNav company={Company} serviceTitle={ServiceTitle} search={Search} />
));

examples.add('children', () => (
  <TopNav company={Company} serviceTitle={ServiceTitle} active={0}>
    <NavLinkAnchor href="https://example.com?q=catdog">Navigation item #1</NavLinkAnchor>
    <NavLinkAnchor href="https://example.com?q=dogcat">Navigation item #2</NavLinkAnchor>
  </TopNav>
));

examples.add('everything but serviceTitle', () => (
  <TopNav company={Company} search={Search} active={0}>
    <NavLinkAnchor href="https://example.com?q=catdog">Navigation item #1</NavLinkAnchor>
    <NavLinkAnchor href="https://example.com?q=dogcat">Navigation item #2</NavLinkAnchor>
  </TopNav>
));

examples.add('everything', () => (
  <TopNav company={Company} serviceTitle={ServiceTitle} search={Search} active={0}>
    <NavLinkAnchor href="https://example.com?q=catdog" target="new">Navigation item #1</NavLinkAnchor>
    <NavLinkAnchor href="https://example.com?q=dogcat" target="new">Navigation item #2</NavLinkAnchor>
  </TopNav>
));


examples.add('everything with 9 nav items', () => (
  <TopNav company={Company} serviceTitle={ServiceTitle} search={Search} active={0}>
    <NavLinkAnchor href="https://example.com?q=catdog" target="new">Navigation item</NavLinkAnchor>
    <NavLinkAnchor href="https://example.com?q=dogcat" target="new">Navigation item</NavLinkAnchor>
    <NavLinkAnchor href="https://example.com?q=dogcat" target="new">Navigation item</NavLinkAnchor>
    <NavLinkAnchor href="https://example.com?q=dogcat" target="new">Navigation item</NavLinkAnchor>
    <NavLinkAnchor href="https://example.com?q=dogcat" target="new">Navigation item</NavLinkAnchor>
    <NavLinkAnchor href="https://example.com?q=dogcat" target="new">Navigation item</NavLinkAnchor>
    <NavLinkAnchor href="https://example.com?q=dogcat" target="new">Navigation item</NavLinkAnchor>
    <NavLinkAnchor href="https://example.com?q=dogcat" target="new">Navigation item</NavLinkAnchor>
    <NavLinkAnchor href="https://example.com?q=dogcat" target="new">Navigation item</NavLinkAnchor>
  </TopNav>
));
