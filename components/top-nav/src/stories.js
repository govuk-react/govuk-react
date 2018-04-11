import React from 'react';
import { storiesOf } from '@storybook/react';
import { Search } from '@govuk-react/icons';
import { asAnchor } from '@govuk-react/hoc';

import TopNav from '.';

const Logo = <Search width="28" />;
const AnchorTag = asAnchor('a');

storiesOf('TopNav', module).add('default', () => (
  <TopNav logo={Logo} companyTitle="GOV.UK" />
));

storiesOf('TopNav', module).add('with service title', () => (
  <TopNav logo={Logo} companyTitle="GOV.UK" serviceTitle="Service Name" />
));

storiesOf('TopNav', module).add('with propositional navigation', () => (
  <TopNav logo={Logo} companyTitle="GOV.UK" serviceTitle="Service Name" active={0}>
    <AnchorTag href="https://example.com?q=cat">Navigation item #1</AnchorTag>
    <AnchorTag href="https://example.com?q=dog">Navigation item #2</AnchorTag>
  </TopNav>
));

storiesOf('TopNav', module).add('with propositional navigation no serviceTitle', () => (
  <TopNav logo={Logo} companyTitle="GOV.UK" active={0}>
    <AnchorTag href="https://example.com?q=cat">Navigation item #1</AnchorTag>
    <AnchorTag href="https://example.com?q=dog">Navigation item #2</AnchorTag>
  </TopNav>
));

storiesOf('TopNav', module).add('with propositional link', () => (
  <TopNav logo={Logo} companyTitle="GOV.UK" search searchPlaceholder="Search site...">
    <a href="https://example.com?q=cat">Departments</a>
  </TopNav>
));
