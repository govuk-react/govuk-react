import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

import * as Footer from '.';

const meta = {
  title: 'Page & Layout/Footer',
  id: 'footer',
  component: Footer.Composite,
} satisfies Meta<typeof Footer.Composite>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithCopyright: Story = {
  args: { copyright: '© Crown copyright' },
};

export const WithNoLicense: Story = {
  args: { licence: false },
};

export const WithMetaLinks: Story = {
  args: {
    metaHeading: 'Support links',
    metaLinks: (
      <>
        <Footer.InlineListItem>
          <Footer.Link href="#">Help</Footer.Link>
        </Footer.InlineListItem>
        <Footer.InlineListItem>
          <Footer.Link href="#">Cookies</Footer.Link>
        </Footer.InlineListItem>
        <Footer.InlineListItem>
          <Footer.Link href="#">Contact</Footer.Link>
        </Footer.InlineListItem>
      </>
    ),
  },
};

export const WithNavigation: Story = {
  args: {
    navigation: (
      <>
        <Footer.Section width="two-thirds">
          <Footer.Heading>Services and information</Footer.Heading>
          <Footer.List columns={2}>
            <Footer.ListItem>
              <Footer.Link href="#">Benefits</Footer.Link>
            </Footer.ListItem>
            <Footer.ListItem>
              <Footer.Link href="#">Births, deaths, marriages and care</Footer.Link>
            </Footer.ListItem>
            <Footer.ListItem>
              <Footer.Link href="#">Business and self-employed</Footer.Link>
            </Footer.ListItem>
            <Footer.ListItem>
              <Footer.Link href="#">Childcare and parenting</Footer.Link>
            </Footer.ListItem>
          </Footer.List>
        </Footer.Section>
        <Footer.Section width="one-third">
          <Footer.Heading>Departments and policy</Footer.Heading>
          <Footer.List>
            <Footer.ListItem>
              <Footer.Link href="#">How government works</Footer.Link>
            </Footer.ListItem>
            <Footer.ListItem>
              <Footer.Link href="#">Departments</Footer.Link>
            </Footer.ListItem>
          </Footer.List>
        </Footer.Section>
      </>
    ),
  },
};
