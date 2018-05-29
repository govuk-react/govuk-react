import React from 'react';
import { storiesOf } from '@storybook/react';
import { BrowserRouter, Link } from 'react-router-dom';
import { asAnchor } from '@govuk-react/hoc';
import { withDocs } from 'storybook-readme';

import Breadcrumb from '.';
import ReadMe from '../README.md';

const AnchorTag = asAnchor('a');
const AnchorLink = asAnchor(Link);

const crumbsWithDuffChildren = [];

const stories = storiesOf('Navigation/Breadcrumb', module);
const examples = storiesOf('Navigation/Breadcrumb/Examples', module);

stories.addDecorator(withDocs(ReadMe));

stories.add('Component default', () => (
  <Breadcrumb>
    <AnchorTag href="/section">Section 1</AnchorTag>
  </Breadcrumb>
));

examples.add('Three levels deep', () => (
  <Breadcrumb>
    <a href="/section">Section 1</a>
    <a href="/section/sub-section">Sub-section</a>
    Current page
  </Breadcrumb>
));

examples.add('Duff children', () => (
  <Breadcrumb>
    <AnchorTag href="/section">Section 1</AnchorTag>
    {crumbsWithDuffChildren}
    Current page
  </Breadcrumb>
));

examples.add(
  'Three levels deep using React Router Link',
  () => (
    <Breadcrumb>
      <BrowserRouter>
        <AnchorLink to="/section">Section 1</AnchorLink>
      </BrowserRouter>
      <BrowserRouter>
        <AnchorLink to="/section/sub-section">Sub-section</AnchorLink>
      </BrowserRouter>
      Current page
    </Breadcrumb>
  ),
);
