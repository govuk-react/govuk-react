import React from 'react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

import { FieldsetDocumented as Fieldset } from '.';

export default {
  title: 'Form/Fieldset',
  component: Fieldset,
  decorators: [withKnobs],
};

export const Default = () => (
  <Fieldset>
    <Fieldset.Legend size={text('legend size', 'LARGE')} isPageHeading={boolean('legend isPageHeading', false)}>
      {text('legend contents', 'Example legend')}
    </Fieldset.Legend>
  </Fieldset>
);

export const LegendAsPageHeading = () => (
  <Fieldset>
    <Fieldset.Legend size="XLARGE" isPageHeading>
      Legend as page heading
    </Fieldset.Legend>
  </Fieldset>
);
