import React from 'react';
import { storiesOf } from '@storybook/react';
import { asAnchor } from '@govuk-react/hoc';

import DocumentFooterMetadata from '.';

const AnchorTag = asAnchor('a');

const fromData = [
  <AnchorTag href="/government/organisations/ministry-of-defence">Ministry of Defence</AnchorTag>,
];

const partOfData = [
  <AnchorTag href="/government/topics/energy">Energy</AnchorTag>,
  <AnchorTag href="/government/topics/environment">Environment</AnchorTag>,
];

const otherData = [
  {
    id: 0,
    title: 'Consultation type',
    content: <AnchorTag href="/government/publications">Open</AnchorTag>,
  },
  {
    id: 1,
    title: 'Published',
    content: '20 January 2012',
  },
  {
    id: 2,
    title: 'Date opened',
    content: '1 February 2012',
  },
  {
    id: 3,
    title: 'Date closed',
    content: '1 March 2013',
  },
];

const stories = storiesOf('Typography/Document Footer Metadata', module);

stories.add('DFM From example', () => (
  <DocumentFooterMetadata
    from={fromData}
  />
));

stories.add('DFM From & part of example', () => (
  <DocumentFooterMetadata
    from={fromData}
    partOf={partOfData}
  />
));

stories.add('DFM From & other data example', () => (
  <DocumentFooterMetadata
    from={fromData}
    other={otherData}
  />
));
