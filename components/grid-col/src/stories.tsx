import type { Story } from '@storybook/react';

import * as React from 'react';
import styled from 'styled-components';

import GridRow from '@govuk-react/grid-row';
import { H2 } from '@govuk-react/heading';
import Paragraph from '@govuk-react/paragraph';

import { GridCol } from '.';

export default {
  title: 'Page & Layout/Grid col',
  id: 'grid-col',
  component: GridCol,
};

const Content = styled('div')({
  textIndent: '-999em',
  backgroundColor: '#7DADD3',
  backgroundImage: 'repeating-linear-gradient(180deg, #7DADD3, #7DADD3 15px, #B7CFE1 15px, #B7CFE1 30px)',
});
Content.displayName = 'div';

export const Default: Story = (args) => (
  <GridRow>
    <GridCol setWidth="one-half" {...args}>
      <H2>Half column</H2>
      <Paragraph>
        This guide shows how to make your service look consistent with the rest of GOV.UK. It includes example code and
        guidance for layout, typography, colour, images, icons, forms, buttons and data.
      </Paragraph>
    </GridCol>
    <GridCol setWidth="one-half">
      <H2>Half column</H2>
      <Paragraph>
        This guide shows how to make your service look consistent with the rest of GOV.UK. It includes example code and
        guidance for layout, typography, colour, images, icons, forms, buttons and data.
      </Paragraph>
    </GridCol>
  </GridRow>
);

export const ColumnHalves: Story = (args) => (
  <GridRow>
    <GridCol setWidth="one-half" {...args}>
      <Content>content</Content>
    </GridCol>
    <GridCol setWidth="one-half">
      <Content>content</Content>
    </GridCol>
  </GridRow>
);

export const ColumnThirds: Story = (args) => (
  <GridRow>
    <GridCol setWidth="one-third" {...args}>
      <Content>content</Content>
    </GridCol>
    <GridCol setWidth="one-third">
      <Content>content</Content>
    </GridCol>
    <GridCol setWidth="one-third">
      <Content>content</Content>
    </GridCol>
  </GridRow>
);

export const ColumnTwoThirdsOneThird: Story = (args) => (
  <GridRow>
    <GridCol setWidth="two-thirds" {...args}>
      <Content>content</Content>
    </GridCol>
    <GridCol setWidth="one-third">
      <Content>content</Content>
    </GridCol>
  </GridRow>
);

export const ColumnOneThirdTwoThirds: Story = (args) => (
  <GridRow>
    <GridCol setWidth="one-third" {...args}>
      <Content>content</Content>
    </GridCol>
    <GridCol setWidth="two-thirds">
      <Content>content</Content>
    </GridCol>
  </GridRow>
);

export const ColumnFourQuarters: Story = (args) => (
  <GridRow>
    <GridCol setWidth="one-quarter" {...args}>
      <Content>content</Content>
    </GridCol>
    <GridCol setWidth="one-quarter">
      <Content>content</Content>
    </GridCol>
    <GridCol setWidth="one-quarter">
      <Content>content</Content>
    </GridCol>
    <GridCol setWidth="one-quarter">
      <Content>content</Content>
    </GridCol>
  </GridRow>
);

export const ColumnOneQuarterAndAutoFill: Story = (args) => (
  <GridRow>
    <GridCol setWidth="one-quarter" {...args}>
      <Content>content</Content>
    </GridCol>
    <GridCol>
      <Content>content</Content>
    </GridCol>
  </GridRow>
);

export const ColumnWidthsDifferingBetweenTabletAndDesktop: Story = (args) => (
  <GridRow>
    <GridCol setWidth="one-quarter" setDesktopWidth="one-third" {...args}>
      <Content>content</Content>
    </GridCol>
    <GridCol setWidth="three-quarters" setDesktopWidth="auto">
      <Content>content</Content>
    </GridCol>
  </GridRow>
);

export const CustomWidthsDifferingBetweenTabletAndDesktop: Story = (args) => (
  <GridRow>
    <GridCol setWidth="60%" setDesktopWidth="auto" {...args}>
      <Content>content</Content>
    </GridCol>
    <GridCol setWidth="30%" setDesktopWidth="18%">
      <Content>content</Content>
    </GridCol>
    <GridCol setWidth="auto" setDesktopWidth="400px">
      <Content>content</Content>
    </GridCol>
  </GridRow>
);
