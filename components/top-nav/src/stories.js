import React from 'react';
import { storiesOf } from '@storybook/react';
import CrownIcon from '@govuk-react/icon-crown';
import SearchBox from '@govuk-react/search-box';
import Header from '@govuk-react/header';
import glamorous from 'glamorous';

import TopNav, { asAnchor } from '.';

const AnchorTag = asAnchor('a');
const link = 'https://example.com?=1';
// TODO: vertical alignment here needs some work, perhaps should be its own component,
// icon should be lined up with font baseline, e.g. vertical-align: baseline
const GovUkLogo = glamorous('div')({
  display: 'flex',
  alignItems: 'center',
});

const Company = (
  <AnchorTag href={link} target="new">
    <GovUkLogo>
      <CrownIcon width="36px" />
      <Header level={1} size="MEDIUM">GOV.UK</Header>
    </GovUkLogo>
  </AnchorTag>
);

const ServiceTitle = (
  <AnchorTag color="#fff" href={link} target="new">
    <React.Fragment>
      <Header level={3}>Service Title</Header>
    </React.Fragment>
  </AnchorTag>
);

const Search = (
  <SearchBox placeholder="Search">hi</SearchBox>
);

storiesOf('TopNav', module).add('default', () => (
  <TopNav company={Company} />
));

storiesOf('TopNav', module).add('service title', () => (
  <TopNav company={Company} serviceTitle={ServiceTitle} />
));

storiesOf('TopNav', module).add('search', () => (
  <TopNav company={Company} serviceTitle={ServiceTitle} search={Search} />
));

storiesOf('TopNav', module).add('children', () => (
  <TopNav company={Company} serviceTitle={ServiceTitle} active={0}>
    <AnchorTag href="https://example.com?q=catdog">Navigation item #1</AnchorTag>
    <AnchorTag href="https://example.com?q=dogcat">Navigation item #2</AnchorTag>
  </TopNav>
));

storiesOf('TopNav', module).add('everything but serviceTitle', () => (
  <TopNav company={Company} search={Search} active={0}>
    <AnchorTag href="https://example.com?q=catdog">Navigation item #1</AnchorTag>
    <AnchorTag href="https://example.com?q=dogcat">Navigation item #2</AnchorTag>
  </TopNav>
));

storiesOf('TopNav', module).add('everything', () => (
  <TopNav company={Company} serviceTitle={ServiceTitle} search={Search} active={0}>
    <AnchorTag href="https://example.com?q=catdog" target="new">Navigation item #1</AnchorTag>
    <AnchorTag href="https://example.com?q=dogcat" target="new">Navigation item #2</AnchorTag>
  </TopNav>
));


storiesOf('TopNav', module).add('everything with 9 nav items', () => (
  <TopNav company={Company} serviceTitle={ServiceTitle} search={Search} active={0}>
    <AnchorTag href="https://example.com?q=catdog" target="new">Navigation item</AnchorTag>
    <AnchorTag href="https://example.com?q=dogcat" target="new">Navigation item</AnchorTag>
    <AnchorTag href="https://example.com?q=dogcat" target="new">Navigation item</AnchorTag>
    <AnchorTag href="https://example.com?q=dogcat" target="new">Navigation item</AnchorTag>
    <AnchorTag href="https://example.com?q=dogcat" target="new">Navigation item</AnchorTag>
    <AnchorTag href="https://example.com?q=dogcat" target="new">Navigation item</AnchorTag>
    <AnchorTag href="https://example.com?q=dogcat" target="new">Navigation item</AnchorTag>
    <AnchorTag href="https://example.com?q=dogcat" target="new">Navigation item</AnchorTag>
    <AnchorTag href="https://example.com?q=dogcat" target="new">Navigation item</AnchorTag>
  </TopNav>
));
