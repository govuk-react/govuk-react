import React from 'react';
import { storiesOf } from '@storybook/react';
import Link from '@govuk-react/link';
import { withDocsCustom } from '@govuk-react/storybook-components';

import DocumentFooterMetadata from '.';
import ReadMe from '../README.md';

const fromData = [<Link href="/government/organisations/ministry-of-defence">Ministry of Defence</Link>];

const partOfData = [
  <Link href="/government/topics/energy">Energy</Link>,
  <Link href="/government/topics/environment">Environment</Link>,
];

const otherData = [
  {
    id: 0,
    title: 'Consultation type',
    content: <Link href="/government/publications">Open</Link>,
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
const examples = storiesOf('Typography/Document Footer Metadata/Examples', module);

stories.addDecorator(withDocsCustom(ReadMe));

stories.add('Component default', () => <DocumentFooterMetadata from={fromData} />);

examples.add('DFM From & part of example', () => <DocumentFooterMetadata from={fromData} partOf={partOfData} />);

examples.add('DFM From & other data example', () => <DocumentFooterMetadata from={fromData} other={otherData} />);
