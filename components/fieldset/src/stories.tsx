import React from 'react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

import { Fieldset } from '.';

export default {
  title: 'Form/Fieldset',
  component: Fieldset,
  decorators: [withKnobs],
};

export const Default: React.FC = () => (
  <Fieldset>
    <Fieldset.Legend size={text('legend size', 'LARGE')} isPageHeading={boolean('legend isPageHeading', false)}>
      {text('legend contents', 'Example legend')}
    </Fieldset.Legend>
  </Fieldset>
);

export const LegendAsPageHeading: React.FC = () => (
  <Fieldset>
    <Fieldset.Legend size="XLARGE" isPageHeading>
      Legend as page heading
    </Fieldset.Legend>
  </Fieldset>
);
