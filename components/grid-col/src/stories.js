import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { withDocsCustom } from '@govuk-react/storybook-components';

import GridRow from '@govuk-react/grid-row';
import { H2 } from '@govuk-react/heading';
import Paragraph from '@govuk-react/paragraph';

import GridCol from '.';
import ReadMe from '../README.md';

const Content = styled('div')({
  textIndent: '-999em',
  backgroundColor: '#7DADD3',
  backgroundImage: 'repeating-linear-gradient(180deg, #7DADD3, #7DADD3 15px, #B7CFE1 15px, #B7CFE1 30px)',
});

const stories = storiesOf('Layout/GridCol', module).addParameters({
  chromatic: { viewports: [320, 720, 1200] },
});
const examples = storiesOf('Layout/GridCol/Examples', module).addParameters({
  chromatic: { viewports: [320, 720, 1200] },
});

stories.addDecorator(withDocsCustom(ReadMe));

stories.add('Component default', () => (
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
));

examples.add('Column Halves', () => (
  <GridRow>
    <GridCol setWidth="one-half">
      <Content>content</Content>
    </GridCol>
    <GridCol setWidth="one-half">
      <Content>content</Content>
    </GridCol>
  </GridRow>
));

examples.add('Column Thirds', () => (
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
));

examples.add('Column Two Thirds / One Third', () => (
  <GridRow>
    <GridCol setWidth="two-thirds">
      <Content>content</Content>
    </GridCol>
    <GridCol setWidth="one-third">
      <Content>content</Content>
    </GridCol>
  </GridRow>
));

examples.add('Column One Third / Two Thirds', () => (
  <GridRow>
    <GridCol setWidth="one-third">
      <Content>content</Content>
    </GridCol>
    <GridCol setWidth="two-thirds">
      <Content>content</Content>
    </GridCol>
  </GridRow>
));

examples.add('Column Four Quarters', () => (
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
));

examples.add('Column One Quarter and auto-fill', () => (
  <GridRow>
    <GridCol setWidth="one-quarter">
      <Content>content</Content>
    </GridCol>
    <GridCol>
      <Content>content</Content>
    </GridCol>
  </GridRow>
));

examples.add('Column widths differing between tablet and desktop', () => (
  <GridRow>
    <GridCol setWidth="one-quarter" setDesktopWidth="one-third">
      <Content>content</Content>
    </GridCol>
    <GridCol setWidth="three-quarters" setDesktopWidth="auto">
      <Content>content</Content>
    </GridCol>
  </GridRow>
));

examples.add('Custom widths, differing between tablet and desktop', () => (
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
));
