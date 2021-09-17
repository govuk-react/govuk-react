import React from 'react';
import styled from 'styled-components';

import GridRow from '@govuk-react/grid-row';
import { H2 } from '@govuk-react/heading';
import Paragraph from '@govuk-react/paragraph';

import { GridCol } from '.';

const Content = styled('div')({
  textIndent: '-999em',
  backgroundColor: '#7DADD3',
  backgroundImage: 'repeating-linear-gradient(180deg, #7DADD3, #7DADD3 15px, #B7CFE1 15px, #B7CFE1 30px)',
});

export default {
  title: 'Page & Layout/Grid col',
  component: GridCol,
};

export const Default: React.FC = () => (
  <GridRow>
    <GridCol setWidth="one-half">
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

export const ColumnHalves: React.FC = () => (
  <GridRow>
    <GridCol setWidth="one-half">
      <Content>content</Content>
    </GridCol>
    <GridCol setWidth="one-half">
      <Content>content</Content>
    </GridCol>
  </GridRow>
);

export const ColumnThirds: React.FC = () => (
  <GridRow>
    <GridCol setWidth="one-third">
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

export const ColumnTwoThirdsOneThird: React.FC = () => (
  <GridRow>
    <GridCol setWidth="two-thirds">
      <Content>content</Content>
    </GridCol>
    <GridCol setWidth="one-third">
      <Content>content</Content>
    </GridCol>
  </GridRow>
);

export const ColumnOneThirdTwoThirds: React.FC = () => (
  <GridRow>
    <GridCol setWidth="one-third">
      <Content>content</Content>
    </GridCol>
    <GridCol setWidth="two-thirds">
      <Content>content</Content>
    </GridCol>
  </GridRow>
);

export const ColumnFourQuarters: React.FC = () => (
  <GridRow>
    <GridCol setWidth="one-quarter">
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

export const ColumnOneQuarterAndAutoFill: React.FC = () => (
  <GridRow>
    <GridCol setWidth="one-quarter">
      <Content>content</Content>
    </GridCol>
    <GridCol>
      <Content>content</Content>
    </GridCol>
  </GridRow>
);

export const ColumnWidthsDifferingBetweenTabletAndDesktop: React.FC = () => (
  <GridRow>
    <GridCol setWidth="one-quarter" setDesktopWidth="one-third">
      <Content>content</Content>
    </GridCol>
    <GridCol setWidth="three-quarters" setDesktopWidth="auto">
      <Content>content</Content>
    </GridCol>
  </GridRow>
);

export const CustomWidthsDifferingBetweenTabletAndDesktop: React.FC = () => (
  <GridRow>
    <GridCol setWidth="60%" setDesktopWidth="auto">
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
