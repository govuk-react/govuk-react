import React from 'react';
import { storiesOf } from '@storybook/react';
import { Search as SearchIcon} from '@govuk-react/icons';
import SearchBox from '@govuk-react/search-box';
import { asAnchor } from '@govuk-react/hoc';
import Header from '@govuk-react/header';

import TopNav from '.';

const AnchorTag = asAnchor('a');
const link = 'https://example.com?=1';

const Company = (
  <AnchorTag href={link}>
    <React.Fragment>
      <SearchIcon width="30px" />
      <Header level={1} size="MEDIUM">GOV.UK</Header>
    </React.Fragment>
  </AnchorTag>
);

const ServiceTitle = (
  <AnchorTag color="#fff" href={link}>
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
  <TopNav company={Company} serviceTitle={ServiceTitle}>
    <AnchorTag href="https://example.com?q=catdog">Navigation item #1</AnchorTag>
    <AnchorTag href="https://example.com?q=dogcat">Navigation item #2</AnchorTag>
  </TopNav>
));

storiesOf('TopNav', module).add('everything but serviceTitle', () => (
  <TopNav company={Company} search={Search}>
    <AnchorTag href="https://example.com?q=catdog">Navigation item #1</AnchorTag>
    <AnchorTag href="https://example.com?q=dogcat">Navigation item #2</AnchorTag>
  </TopNav>
));

storiesOf('TopNav', module).add('everything', () => (
  <TopNav company={Company} serviceTitle={ServiceTitle} search={Search}>
    <AnchorTag href="https://example.com?q=catdog">Navigation item #1</AnchorTag>
    <AnchorTag href="https://example.com?q=dogcat">Navigation item #2</AnchorTag>
  </TopNav>
));
