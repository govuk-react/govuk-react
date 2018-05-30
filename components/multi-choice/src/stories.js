import React from 'react';
import { storiesOf } from '@storybook/react';
import { WithDocsCustom } from '@govuk-react/storybook-components';

import Radio from '@govuk-react/radio';
import MultiChoice from '.';
import ReadMe from '../README.md';

const stories = storiesOf('Form/MultiChoice', module);

stories.addDecorator(WithDocsCustom(ReadMe));

stories.add('MultiChoice', () => (
  <MultiChoice label="example">
    <Radio name="group1" inline>
      Yes
    </Radio>
    <Radio name="group1" inline>
      No
    </Radio>
  </MultiChoice>
));
