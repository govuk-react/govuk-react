import React from 'react';
import { storiesOf } from '@storybook/react';

import DocumentFooterMetadata from '.';

const fromData = [
  <a href="/government/organisations/ministry-of-defence">Ministry of Defence</a>,
  <a href="/government/organisations/cabinet-office">Cabinet Office</a>,
];

const partOfData = [
  "<a href='/government/topics/energy'>Energy</a>",
  "<a href='/government/topics/environment'>Environment</a>",
];

const otherData = [
  {
    'Consultation type': "<a href='/government/publications'>Open</a>",
    Published: '20 January 2012',
    'Date opened': '1 February 2012',
    'Date closed': '1 March 2013',
  },
];

storiesOf('Document Footer Metadata', module).add('DFM From example', () => (
  <DocumentFooterMetadata
    from={fromData}
  />
));

storiesOf('Document Footer Metadata', module).add('DFM From & part of example', () => (
  <DocumentFooterMetadata
    from={fromData}
    partOf={partOfData}
  />
));

storiesOf('Document Footer Metadata', module).add('DFM From and other example', () => (
  <DocumentFooterMetadata
    from={fromData}
    other={otherData}
  />
));
