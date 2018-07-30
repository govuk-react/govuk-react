import React from 'react';
import { storiesOf } from '@storybook/react';
import { WithDocsCustom } from '@govuk-react/storybook-components';

// Can't seem to overcome import/no-extraneous-dependencies with the following line;
// import { GridRow, H2, Paragraph } from 'govuk-react';
import GridRow from '@govuk-react/grid-row';
import { H2 } from '@govuk-react/header';
import Paragraph from '@govuk-react/paragraph';

import GridCol from '.';
import ReadMe from '../README.md';

const stories = storiesOf('Layout/GridCol', module);
const examples = storiesOf('Layout/GridCol/Examples', module);

stories.addDecorator(WithDocsCustom(ReadMe));

stories.add('Component default', () => (
  <GridRow>
    <GridCol columnOneHalf>
      <H2>Half column</H2>
      <Paragraph>
        This guide shows how to make your service look consistent with the rest of
        GOV.UK. It includes example code and guidance for layout, typography,
        colour, images, icons, forms, buttons and data.
      </Paragraph>
    </GridCol>
    <GridCol columnOneHalf>
      <H2>Half column</H2>
      <Paragraph>
        This guide shows how to make your service look consistent with the rest of
        GOV.UK. It includes example code and guidance for layout, typography,
        colour, images, icons, forms, buttons and data.
      </Paragraph>
    </GridCol>
  </GridRow>
));

examples.add('Column Halves', () => (
  <GridRow>
    <GridCol hideContent columnOneHalf>
      <p>content</p>
    </GridCol>
    <GridCol hideContent columnOneHalf>
      <p>content</p>
    </GridCol>
  </GridRow>
));

examples.add('Column Thirds', () => (
  <GridRow>
    <GridCol hideContent columnOneThird>
      <p>content</p>
    </GridCol>
    <GridCol hideContent columnOneThird>
      <p>content</p>
    </GridCol>
    <GridCol hideContent columnOneThird>
      <p>content</p>
    </GridCol>
  </GridRow>
));

examples.add('Column Two Thirds / One Third', () => (
  <GridRow>
    <GridCol hideContent columnTwoThirds>
      <p>content</p>
    </GridCol>
    <GridCol hideContent columnOneThird>
      <p>content</p>
    </GridCol>
  </GridRow>
));

examples.add('Column One Third / Two Thirds', () => (
  <GridRow>
    <GridCol hideContent columnOneThird>
      <p>content</p>
    </GridCol>
    <GridCol hideContent columnTwoThirds>
      <p>content</p>
    </GridCol>
  </GridRow>
));

examples.add('Quarters', () => (
  <GridRow>
    <GridCol hideContent columnOneQuarter>
      <p>content</p>
    </GridCol>
    <GridCol hideContent columnOneQuarter>
      <p>content</p>
    </GridCol>
    <GridCol hideContent columnOneQuarter>
      <p>content</p>
    </GridCol>
    <GridCol hideContent columnOneQuarter>
      <p>content</p>
    </GridCol>
  </GridRow>
));

examples.add('One Quarter and autoFill', () => (
  <GridRow>
    <GridCol hideContent columnOneQuarter>
      <p>content</p>
    </GridCol>
    <GridCol hideContent autoFill>
      <p>content</p>
    </GridCol>
  </GridRow>
));

