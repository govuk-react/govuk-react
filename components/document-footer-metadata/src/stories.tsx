import type { Story } from '@storybook/react';

import * as React from 'react';

import Link from '@govuk-react/link';

import { DocumentFooterMetadata } from '.';

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
  id: 'document-footer-metadata',
  component: DocumentFooterMetadata,
};

const Template: Story<React.ComponentProps<typeof DocumentFooterMetadata>> = (args) => (
  <DocumentFooterMetadata {...args} />
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
