import React, { Fragment } from 'react';
import { text, object } from '@storybook/addon-knobs/react';
import Radio from '@govuk-react/radio';

import MultiChoice from '.';

const metaData = { touched: true, error: 'Example error' };
const children = (
  <Fragment>
    <Radio name="group1" inline>
      Yes
    </Radio>
    <Radio name="group1" inline>
      No
    </Radio>
  </Fragment>
);

const MultiChoiceWithKnobs = () => <MultiChoice label={text('Label', 'Example label')}>{children}</MultiChoice>;

export const MultiChoiceWithKnobsHint = () => (
  <MultiChoice label={text('Label', 'Example label')} hint={text('Example hint', 'Example hint')}>
    {children}
  </MultiChoice>
);

export const MultiChoiceWithKnobsError = () => (
  <MultiChoice label={text('Label', 'Example label')} meta={object('Meta', metaData)}>
    {children}
  </MultiChoice>
);

export default MultiChoiceWithKnobs;
