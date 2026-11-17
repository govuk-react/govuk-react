import type { StoryFn } from '@storybook/react';

import * as React from 'react';

import { Link } from '../link';

import * as DocumentFooterMetadata from '.';

const fromData = [
  <Link key="mod" href="/government/organisations/ministry-of-defence">
    Ministry of Defence
  </Link>,
];

const partOfData = [
  <Link key="energy" href="/government/topics/energy">
    Energy
  </Link>,
  <Link key="environment" href="/government/topics/environment">
    Environment
  </Link>,
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
  id: 'document-footer-metadata',
  component: DocumentFooterMetadata.Composite,
};

const Template: StoryFn<React.ComponentProps<typeof DocumentFooterMetadata.Composite>> = (args) => (
  <DocumentFooterMetadata.Composite {...args} />
);

export const Default = Template.bind({});
Default.args = {
  from: fromData,
};

export const DfmFromPartOfExample = Template.bind({});
DfmFromPartOfExample.args = {
  from: fromData,
  partOf: partOfData,
};

export const DfmFromOtherDataExample = Template.bind({});
DfmFromOtherDataExample.args = {
  from: fromData,
  other: otherData,
};

export const WithItems = Template.bind({});
WithItems.args = {
  children: (
    <>
      <DocumentFooterMetadata.ItemComposite term="From" definitions={fromData} />
      <DocumentFooterMetadata.ItemComposite term="Published" definitions={['20 January 2012']} />
    </>
  ),
};
