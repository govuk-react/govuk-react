import React from 'react';
import { storiesOf } from '@storybook/react';
import { WithDocsCustom } from '@govuk-react/storybook-components';

import GridCol from '.';
import ReadMe from '../README.md';

const stories = storiesOf('Layout/GridCol', module);

stories.addDecorator(WithDocsCustom(ReadMe));

stories.add('Component default', () => (
  <GridCol columFull>
    <h2>full column</h2>
    <p>Please see Layout for visual examples</p>
    <p>
      This guide shows how to make your service look consistent with the rest of
      This guide shows how to make your service look consistent with the rest of
      GOV.UK. It includes example code and guidance for layout, typography,
      colour, images, icons, forms, buttons and data.
    </p>
  </GridCol>
));
