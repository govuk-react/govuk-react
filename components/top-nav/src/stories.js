import React from 'react';
import { storiesOf } from '@storybook/react';
import { Search } from '@govuk-react/icons';

import TopNav from '.';

const Logo = <Search width="28" />;

storiesOf('TopNav', module).add('default', () => (
  <TopNav logo={Logo} companyTitle="GOV.UK" />
));

storiesOf('TopNav', module).add('with service title', () => (
  <TopNav logo={Logo} companyTitle="GOV.UK" serviceTitle="Service name" />
));

storiesOf('TopNav', module).add('with propositional navigation', () => (
  <TopNav logo={Logo} companyTitle="GOV.UK" search searchPlaceholder="Search site...">
    <a href="https://example.com?q=cat">Departments</a>
    <a href="https://example.com?q=dog">Worldwide</a>
    <a href="https://example.com?q=chicken">How government works</a>
    <a href="https://example.com?q=rabbit">Get involved</a>
    <a href="https://example.com?q=horse">Policies</a>
    <a href="https://example.com?q=duck">Publications</a>
    <a href="https://example.com?q=bear">Consultations</a>
    <a href="https://example.com?q=pig">Statistics</a>
    <a href="https://example.com?q=mouse">Annoucements</a>
  </TopNav>
));

storiesOf('TopNav', module).add('with propositional link', () => (
  <TopNav logo={Logo} companyTitle="GOV.UK" search searchPlaceholder="Search site...">
    <a href="https://example.com?q=cat">Departments</a>
  </TopNav>
));
