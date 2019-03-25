import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs/react';
import { withDocsCustom } from '@govuk-react/storybook-components';

import Fieldset from '.';

import ReadMe from '../README.md';

const stories = storiesOf('Form/Fieldset', module);
const examples = storiesOf('Form/Fieldset/Examples', module);
stories.addDecorator(withKnobs);
stories.addDecorator(withDocsCustom(ReadMe));

stories.add('Component default', () => (
  <Fieldset>
    <Fieldset.Legend size={text('legend size', 'LARGE')} isPageHeading={boolean('legend isPageHeading', false)}>
      {text('legend contents', 'Example legend')}
    </Fieldset.Legend>
  </Fieldset>
));

examples.add('Legend as page heading', () => (
  <Fieldset>
    <Fieldset.Legend size="XLARGE" isPageHeading>
      Legend as page heading
    </Fieldset.Legend>
  </Fieldset>
));
