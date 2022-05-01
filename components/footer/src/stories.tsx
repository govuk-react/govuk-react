import type { Meta, Story } from '@storybook/react';

import * as React from 'react';
import styled from 'styled-components';

import { MEDIA_QUERIES, GUTTER } from '@govuk-react/constants';

import crest from './govuk-crest.png';

import { Footer } from '.';

const meta: Meta & { id: string } = {
  title: 'Page & Layout/Footer',
  id: 'footer',
  component: Footer,
};

export default meta;

const Template: Story<React.ComponentProps<typeof Footer>> = (args) => <Footer {...args} />;

export const Default = Template.bind({});

export const WithCustomWidthContainerNoWidthLimit = Template.bind({});

WithCustomWidthContainerNoWidthLimit.args = {
  container: styled(Footer.WidthContainer)({
    maxWidth: 'inherit',
    [MEDIA_QUERIES.MAX]: {
      margin: `0 ${GUTTER}`,
    },
  }),
};

export const WithCopyright = Template.bind({});

WithCopyright.args = {
  copyright: {
    text: 'Crown copyright',
    link: 'https://www.nationalarchives.gov.uk/information-management/re-using-public-sector-information/uk-government-licensing-framework/crown-copyright/',
    image: {
      src: crest,
      height: 102,
      width: 125,
    },
  },
};

export const WithCustomLicense = Template.bind({});

WithCustomLicense.args = {
  licence: (
    <span>
      All content is available under the{' '}
      <Footer.Link href="https://creativecommons.org/licenses/by/4.0/" rel="license">
        Creative Commons Attribution 4.0 International Licence
      </Footer.Link>
      , except where otherwise stated
    </span>
  ),
};

export const WithNoLicense = Template.bind({});

WithNoLicense.args = {
  licence: false,
};

export const WithMetaLinks = Template.bind({});
WithMetaLinks.args = {
  meta: (
    <Footer.MetaLinks heading="Support links">
      <Footer.Link href="/">Item 1</Footer.Link>
      <Footer.Link href="/footer-meta-item-2">Item 2</Footer.Link>
      <Footer.Link href="/">Item 3</Footer.Link>
    </Footer.MetaLinks>
  ),
};

export const WithMetaCustom = Template.bind({});
WithMetaCustom.args = {
  meta: (
    <Footer.MetaCustom>
      Built by the <Footer.Link href="/">Government Digital Service</Footer.Link>
    </Footer.MetaCustom>
  ),
};

export const WithMetaLinksAndCustom = Template.bind({});
WithMetaLinksAndCustom.args = {
  meta: (
    <>
      <Footer.MetaLinks heading="Support links">
        <Footer.Link href="/">Item 1</Footer.Link>
        <Footer.Link href="/footer-meta-item-2">Item 2</Footer.Link>
        <Footer.Link href="/">Item 3</Footer.Link>
      </Footer.MetaLinks>
      <Footer.MetaCustom>
        Built by the <Footer.Link href="/">Government Digital Service</Footer.Link>
      </Footer.MetaCustom>
    </>
  ),
};

export const WithNavigation = Template.bind({});
WithNavigation.args = {
  children: (
    <Footer.Navigation>
      <Footer.NavigationLinks heading="Two column list" listColumns={2}>
        <Footer.Link href="/">Navigation item 1</Footer.Link>
        <Footer.Link href="/footer-nav-item-2">Navigation item 2</Footer.Link>
        <Footer.Link href="/">Navigation item 3</Footer.Link>
        <Footer.Link href="/">Navigation item 4</Footer.Link>
        <Footer.Link href="/">Navigation item 5</Footer.Link>
        <Footer.Link href="/">Navigation item 6</Footer.Link>
      </Footer.NavigationLinks>
      <Footer.NavigationLinks heading="Single column list">
        <Footer.Link href="/">Navigation item 1</Footer.Link>
        <Footer.Link href="/">Navigation item 2</Footer.Link>
        <Footer.Link href="/">Navigation item 3</Footer.Link>
      </Footer.NavigationLinks>
    </Footer.Navigation>
  ),
};

export const WithNavigationAndMeta = Template.bind({});
WithNavigationAndMeta.args = {
  meta: (
    <>
      <Footer.MetaLinks heading="Support links">
        <Footer.Link href="/">Item 1</Footer.Link>
        <Footer.Link href="/footer-meta-item-2">Item 2</Footer.Link>
        <Footer.Link href="/">Item 3</Footer.Link>
      </Footer.MetaLinks>
      <Footer.MetaCustom>
        Built by the <Footer.Link href="/">Government Digital Service</Footer.Link>
      </Footer.MetaCustom>
    </>
  ),
  children: (
    <Footer.Navigation>
      <Footer.NavigationLinks heading="Two column list" listColumns={2}>
        <Footer.Link href="/">Navigation item 1</Footer.Link>
        <Footer.Link href="/footer-nav-item-2">Navigation item 2</Footer.Link>
        <Footer.Link href="/">Navigation item 3</Footer.Link>
        <Footer.Link href="/">Navigation item 4</Footer.Link>
        <Footer.Link href="/">Navigation item 5</Footer.Link>
        <Footer.Link href="/">Navigation item 6</Footer.Link>
      </Footer.NavigationLinks>
      <Footer.NavigationLinks heading="Single column list">
        <Footer.Link href="/">Navigation item 1</Footer.Link>
        <Footer.Link href="/">Navigation item 2</Footer.Link>
        <Footer.Link href="/">Navigation item 3</Footer.Link>
      </Footer.NavigationLinks>
    </Footer.Navigation>
  ),
};
