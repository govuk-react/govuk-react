import React from 'react';

import Link from '@govuk-react/link';

import DocumentFooterMetadata from '.';

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

export default {
  title: 'Typography/Document Footer Metadata',
  component: DocumentFooterMetadata,
};

export const Default = () => <DocumentFooterMetadata from={fromData} />;
export const DfmFromPartOfExample = () => <DocumentFooterMetadata from={fromData} partOf={partOfData} />;
export const DfmFromOtherDataExample = () => <DocumentFooterMetadata from={fromData} other={otherData} />;
